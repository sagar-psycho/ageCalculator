const countDownDate = new Date("August 14, 2024 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days-number").textContent = days;
    document.getElementById("hours-number").textContent = hours;
    document.getElementById("minutes-number").textContent = minutes;
    document.getElementById("seconds-number").textContent = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").style.display = "block";
        document.querySelector('.intro-container').style.display = "none"; // Hide intro-container when countdown ends
    }
}

const countdownFunction = setInterval(updateCountdown, 1000);
updateCountdown(); // Call it immediately to avoid delay
