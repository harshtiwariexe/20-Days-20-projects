const hourHand = document.getElementById("hour");
const minHand = document.getElementById("minute");
const secondHand = document.getElementById("second");
const dateText = document.getElementById("date");
const timeText = document.getElementById("time");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(() => {
  const time = new Date();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const hour = time.getHours();
  const hour12 = hour % 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const ampm = hour > 12 ? "PM" : "AM";

  dateText.innerHTML = `${days[day]}, ${date} ${months[month]}`;
  timeText.innerHTML = `${hour} : ${
    minute < 10 ? `0${minute}` : minute
  } ${ampm}`;

  hourHand.style.transform = `translate(-50%,-100%) rotate(${hour * 30}deg)`;
  minHand.style.transform = `translate(-50%,-100%) rotate(${minute * 6}deg)`;
  secondHand.style.transform = `translate(-50%,-100%) rotate(${second * 6}deg)`;
}, 1000);
