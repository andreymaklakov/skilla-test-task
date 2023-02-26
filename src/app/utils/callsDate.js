const todayDate = new Date().getDate();
const todayMonth = new Date().getMonth();
const todayYear = new Date().getFullYear();

export function isToday(calls) {
  const date = new Date(Date.parse(calls[0].date_notime));

  const callDate = date.getDate();
  const callMonth = date.getMonth();
  const callYear = date.getFullYear();
  if (
    callYear === todayYear &&
    callMonth === todayMonth &&
    callDate === todayDate
  ) {
    return true;
  }

  return false;
}

export function date(calls) {
  const date = new Date(Date.parse(calls[0].date_notime));

  const callDate = date.getDate();
  const callMonth = date.getMonth();
  const callYear = date.getFullYear();
  if (
    callYear === todayYear &&
    callMonth === todayMonth &&
    todayDate - callDate === 1
  ) {
    return "вчера";
  }

  const month = date
    .toLocaleString("ru", {
      month: "long",
    })
    .slice(0, 3);

  return `${callDate} ${month}`;
}
