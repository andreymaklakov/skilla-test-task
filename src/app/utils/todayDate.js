export default function todayDate() {
  const todayDate = new Date();
  const date = todayDate.getDate();
  const month = todayDate
    .toLocaleString("ru", {
      month: "long",
    })
    .slice(0, 3);
  let weekday = todayDate.toLocaleString("ru", {
    weekday: "long",
  });
  weekday = weekday[0].toUpperCase() + weekday.slice(1);

  return `${weekday}, ${date} ${month}`;
}
