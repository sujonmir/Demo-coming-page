// --- Configuration ---
// Set the date for the launch (Year, Month (0-11), Day, Hour, Minute, Second)
const launchDate = new Date(2024, 11, 31, 23, 59, 59).getTime();

// --- Countdown Logic ---
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML = "<h2>We've Launched!</h2>";
    return;
  }

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Add leading zeros if number is less than 10
  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  // Update the HTML elements
  daysEl.innerText = formatTime(days);
  hoursEl.innerText = formatTime(hours);
  minutesEl.innerText = formatTime(minutes);
  secondsEl.innerText = formatTime(seconds);
};

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
