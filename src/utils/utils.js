function humanizeDuration(duration) {
  let hours = Math.floor(duration / 60);
  let minutes = duration % 60;

  hours = hours > 0 ? `${hours}h` : '';
  minutes = minutes > 0 ? `${minutes}m` : '';
  return `${hours} ${minutes}`;
}


export { humanizeDuration };
