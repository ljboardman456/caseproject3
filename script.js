// Function to get the current time and set a greeting
function setGreeting() {
    let greetingText;
    let currentHour = new Date().getHours(); // Get the current hour (0-23)

    if (currentHour < 12) {
        greetingText = "Good morning!"; // If hour is before noon it is morning
    } else if (currentHour < 18) {
        greetingText = "Good afternoon!"; // This will display afternoon if before 6 pm
    } else {
        greetingText = "Good evening!"; // Everything else is set as evening, including night hours
    }

    document.getElementById("greeting").textContent = greetingText; // Display greeting
}

// Run function when page loads
window.onload = setGreeting;
