// JavaScript for interactive static website:
// - smooth scroll 
// - navbar toggle for mobile view
// - contact form validation

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar toggle for mobile view
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Contact form validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let valid = true;
    if (name === '') {
        valid = false;
        alert('Please enter your name.');
    } else if (email === '' || !validateEmail(email)) {
        valid = false;
        alert('Please enter a valid email address.');
    } else if (message === '') {
        valid = false;
        alert('Please enter your message.');
    }
    if (valid) {
        alert('Thank you for your message!');
        contactForm.reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}   
