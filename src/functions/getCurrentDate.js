const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const day = days[today.getDay()];
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  const date = day + " " + month + " " + today.getDay() + ", " + year;

  export default date;