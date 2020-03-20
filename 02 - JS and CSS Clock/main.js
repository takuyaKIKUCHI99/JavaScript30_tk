const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

const updateClock = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  let hourDeg = (currentHour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  let minuteDeg = (currentMinute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

  let secondDeg = (currentSecond / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
};

window.setInterval(updateClock, 1000);
