export default function getCallDuration(call) {
  const mins = Math.floor(call.time / 60);
  let secs = (call.time - mins * 60).toString();
  secs = secs.length === 1 ? `0${secs}` : secs;

  return call.time ? `${mins}:${secs}` : "";
}
