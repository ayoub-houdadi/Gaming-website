// JavaScript for button interactions

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        alert("More information coming soon!");
    });
});

// Example of dynamic form validation for contact form
document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("textarea[name='message']").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        event.preventDefault();
    }
});
