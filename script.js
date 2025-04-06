"use strict";

// Exception handling for form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Clear any previous error messages
    let errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    // Flag to track if any errors are found
    let hasError = false;

    // Check if the name is entered
    let name = document.getElementById("myName").value.trim();
    if (name === "") {
        hasError = true;
        errorMessages.innerHTML += "<p>Name is required.</p>";
    }

    // Check if the email is valid
    let email = document.getElementById("myEmail").value.trim();
    if (email === "") {
        hasError = true;
        errorMessages.innerHTML += "<p>Email is required.</p>";
    } else {
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            hasError = true;
            errorMessages.innerHTML += "<p>Please enter a valid email address.</p>";
        }
    }

    // Check if the date is selected
    let date = document.getElementById("myDate").value;
    if (date === "") {
        hasError = true;
        errorMessages.innerHTML += "<p>Date is required.</p>";
    }

    // Check if at least one room type is selected
    let roomTypes = document.querySelectorAll('input[name="Canyon"], input[name="Javelina"]');
    let roomSelected = false;
    roomTypes.forEach(function(room) {
        if (room.checked) {
            roomSelected = true;
        }
    });
    if (!roomSelected) {
        hasError = true;
        errorMessages.innerHTML += "<p>Please select at least one room type.</p>";
    }

    // If any errors were found, prevent form submission
    if (hasError) {
        event.preventDefault();
    }
});

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
