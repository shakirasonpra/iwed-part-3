<footer>
  <p>&copy; <span id="year"></span> The Pancake Pantry. All Rights Reserved.</p>
</footer>

Automatic Year Script
This script updates the year automatically in the footer.

document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});

<form id="contactForm">
  <label for="name">Name:</label>
  <input type="text" id="name" placeholder="Enter your name">

  <label for="email">Email:</label>
  <input type="email" id="email" placeholder="Enter your email">

  <label for="message">Message:</label>
  <textarea id="message" placeholder="Write your message"></textarea>

  <button type="submit">Send</button>
</form>

<p id="formMessage"></p>



document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stops the form from refreshing the page

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

   {
    formMessage.textContent = "Please fill in all fields before submitting.";
    formMessage.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});
