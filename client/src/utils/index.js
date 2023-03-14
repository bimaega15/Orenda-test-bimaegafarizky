export const convertMonth = (x) => {
  switch (x) {
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "Mei";
      break;
    case 6:
      return "June";
      break;
    case 7:
      return "July";
      break;
    case 8:
      return "August";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "October";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "December";
      break;
    default:
      break;
  }
};

export const currentTime = () => {
  var today = new Date();
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = today.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var time = today.getHours() + ":" + minutes + ":" + seconds;
  return time;
};

export const currentDate = () => {
  const date = new Date();

  let getDay = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let varCurrentDate = `${getDay} ${convertMonth(month)} ${year}`;

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let varDay = weekday[d.getDay()];

  return {
    date: varCurrentDate,
    day: varDay,
  };
};
