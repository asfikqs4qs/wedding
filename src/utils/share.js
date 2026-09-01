export async function shareInvitation(wedding) {
  const title = `${wedding.groom} & ${wedding.bride} | Wedding Invitation`;
  const text = `You are warmly invited to celebrate the wedding of ${wedding.groom} & ${wedding.bride} on ${wedding.displayDate}, In Sha Allah.`;
  const url = window.location.href;

  if (navigator.share) {
    await navigator.share({ title, text, url });
    return "shared";
  }

  await navigator.clipboard.writeText(`${text} ${url}`);
  return "copied";
}
