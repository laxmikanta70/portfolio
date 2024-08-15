document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formStatus').textContent =" Thank you for your message, ${name}. I will get back to you at ${email} as soon as possible.";
        document.getElementById('formStatus').style.color = 'green';

        // Clear the form fields after submission
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formStatus').textContent = "Please fill out all fields before submitting.";
        document.getElementById('formStatus').style.color = 'red';
    }
});
