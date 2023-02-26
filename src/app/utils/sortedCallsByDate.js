export default function sortedCallsByDate(calls) {
  let result = [];
  let arr = [];

  for (let i = 0; i < calls.length; i++) {
    if (i === 0) {
      arr.push(calls[i]);
    } else if (calls[i - 1].date_notime === calls[i].date_notime) {
      arr.push(calls[i]);
    } else {
      result.push(arr);
      arr = [];
      arr.push(calls[i]);
    }
  }

  result.push(arr);

  return result;
}
