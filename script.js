
var countDownDate = new Date("August 14, 2024 00:00:00").getTime();

// Update the count down every 1 second
var countdownFunction = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    document.getElementById("days-number").innerHTML = days;
    document.getElementById("hours-number").innerHTML = hours;
    document.getElementById("minutes-number").innerHTML = minutes;
    document.getElementById("seconds-number").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").style.display = "block";
    } else {
        document.getElementById("message").style.display = "none";
    }
}, 1000);
