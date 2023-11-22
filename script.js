function startCountdown() {
    // Get the user's input for countdown date and time
    const userInput = document.getElementById("countdown-date").value;

    // Set the date we're counting down to based on user input
    const countDownDate = new Date(userInput).getTime();

    // Update the countdown every 1 second
    const x = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = countDownDate - now;

        // Calculate years, months, days, hours, minutes, and seconds
        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        const countdownElement = document.getElementById("timer");
        countdownElement.innerHTML = `${years}y ${months}mo ${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown is over, display a message and change the background color
        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "EXPIRED";
            document.body.classList.add("expired");
        }
    }, 1000);
}
