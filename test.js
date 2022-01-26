function isWeekday(year, month, day) {
  var day = new Date(year, month, day).getDay();
  console.log(day);
  return day != 0 && day != 6;
}

console.log(isWeekday(2022, 1, 12));