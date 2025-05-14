// Event handling for button click
const changeTextButton = document.getElementById('changeTextButton');
changeTextButton.addEventListener('click', function() {
    changeTextButton.textContent = 'You clicked me!';
});

// Hover effect for box
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', function() {
    hoverBox.textContent = 'Hovered!';
});
hoverBox.addEventListener('mouseout', function() {
    hoverBox.textContent = 'Hover over me!';
});

// Gallery: Click to change image source
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        img.src = 'https://via.placeholder.com/300';
    });
});

// Tab and Accordion functionality
const tabButtons = document.querySelectorAll('.tabButton');
const tabContents = document.querySelectorAll('.tabContent');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.getAttribute('data-content');
        tabContents.forEach(content => {
            content.style.display = content.id === contentId ? 'block' : 'none';
        });
    });
});

// Form validation
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email.includes('@') || password.length < 8) {
        event.preventDefault();
        alert('Please make sure the email format is correct and the password is at least 8 characters.');
    }
});

// Optional: Real-time feedback for email validation
document.getElementById('email').addEventListener('input', function() {
    const email = document.getElementById('email').value;
    const feedback = email.includes('@') ? 'Email is valid' : 'Email is not valid';
    alert(feedback);
});
