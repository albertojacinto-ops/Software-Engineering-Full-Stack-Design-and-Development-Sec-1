const greetingForm = document.getElementById("greeting-form");
const nameInput = document.getElementById("name");
const greeting = document.getElementById("greeting");

greetingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    greeting.textContent = `Hello, ${name}!`;
});
