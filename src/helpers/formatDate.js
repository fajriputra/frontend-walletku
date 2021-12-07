export const formatDate = (date) => {
  const parse = new Date(date);

  const nol = parse.getMinutes() < 10 ? 0 : "";
  let hours = parse.getHours();

  const ampm = hours >= 12 ? "PM" : "AM";

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];

  return `${
    month[parse.getMonth()]
  } ${parse.getDate()}, ${parse.getFullYear()} - ${parse.getHours()}:${nol}${parse.getMinutes()} ${ampm}`;
};
