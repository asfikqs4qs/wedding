import { useCallback, useEffect, useRef, useState } from "react";
import { assetUrl } from "../utils/assets";

function createAmbientMusic() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;

  const context = new AudioContext();
  const master = context.createGain();
  const delay = context.createDelay();
  const feedback = context.createGain();
  const filter = context.createBiquadFilter();
  const notes = [261.63, 329.63, 392.0, 493.88];
  const oscillators = notes.map((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = index % 2 ? "triangle" : "sine";
    oscillator.frequency.value = frequency / (index > 1 ? 2 : 1);
    gain.gain.value = 0.035;
    oscillator.connect(gain);
    gain.connect(filter);
    oscillator.start();
    return oscillator;
  });

  filter.type = "lowpass";
  filter.frequency.value = 760;
  delay.delayTime.value = 0.38;
  feedback.gain.value = 0.18;
  master.gain.value = 0.18;
  filter.connect(delay);
  filter.connect(master);
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(master);
  master.connect(context.destination);

  let step = 0;
  const interval = window.setInterval(() => {
    const now = context.currentTime;
    oscillators.forEach((oscillator, index) => {
      const next = notes[(step + index) % notes.length] / (index > 1 ? 2 : 1);
      oscillator.frequency.setTargetAtTime(next, now, 0.16);
    });
    step += 1;
  }, 1400);

  return {
    get paused() {
      return context.state !== "running";
    },
    async play() {
      await context.resume();
    },
    pause() {
      context.suspend();
    },
    stop() {
      window.clearInterval(interval);
      oscillators.forEach((oscillator) => oscillator.stop());
      context.close();
    },
  };
}

export function useAudio(src) {
  const audioRef = useRef(null);
  const usingSynthRef = useRef(false);
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const start = useCallback(async () => {
    if (!src || attempted) return;
    setAttempted(true);
    const resolvedSrc = assetUrl(src);

    try {
      const response = await fetch(resolvedSrc, { method: "HEAD" });
      if (!response.ok) {
        throw new Error("Music file not available");
      }
    } catch {
      const synth = createAmbientMusic();
      if (!synth) {
        setAvailable(false);
        return;
      }

      audioRef.current = synth;
      usingSynthRef.current = true;
      try {
        await synth.play();
        setAvailable(true);
        setPlaying(true);
      } catch {
        setAvailable(false);
        setPlaying(false);
      }
      return;
    }

    const audio = new Audio(resolvedSrc);
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = "metadata";
    audioRef.current = audio;

    audio.addEventListener("canplaythrough", () => setAvailable(true), { once: true });
    audio.addEventListener(
      "error",
      () => {
        setAvailable(false);
        setPlaying(false);
      },
      { once: true },
    );

    try {
      await audio.play();
      setAvailable(true);
      setPlaying(true);
    } catch {
      setAvailable(false);
      setPlaying(false);
    }
  }, [attempted, src]);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (usingSynthRef.current) {
        audioRef.current?.stop();
      } else {
        audioRef.current?.pause();
      }
      audioRef.current = null;
    };
  }, []);

  return { available, playing, start, toggle };
}
