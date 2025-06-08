
// DOM Elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
const registerLink = document.getElementById('registerLink');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');

// Form Elements
const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const appointmentForm = document.getElementById('appointmentForm');

// Navigation Functions
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    document.getElementById(pageId).classList.add('active');

    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });

    // Close mobile menu if open
    navMenu.classList.remove('active');
}

// Event Listeners
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        showPage(pageId);
    });
});

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('register');
});

registerBtn.addEventListener('click', () => {
    showPage('register');
});

loginBtn.addEventListener('click', () => {
    showPage('login');
});

// Form Validation Functions
function validateRegistrationForm() {
    let isValid = true;

    // Reset errors
    document.querySelectorAll('#registrationForm .error').forEach(error => {
        error.style.display = 'none';
    });

    // Full Name validation
    const fullName = document.getElementById('fullName').value;
    if (!fullName.trim()) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (!age || age < 1 || age > 120) {
        document.getElementById('ageError').style.display = 'block';
        isValid = false;
    }

    // Gender validation
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        document.getElementById('genderError').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    if (!phone || phone.length < 10) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

function validateLoginForm() {
    let isValid = true;

    // Reset errors
    document.querySelectorAll('#loginForm .error').forEach(error => {
        error.style.display = 'none';
    });

    // Email validation
    const email = document.getElementById('loginEmail').value;
    if (!email.trim()) {
        document.getElementById('loginEmailError').style.display = 'block';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('loginPassword').value;
    if (!password) {
        document.getElementById('loginPasswordError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

function validateAppointmentForm() {
    let isValid = true;

    // Reset errors
    document.querySelectorAll('#appointmentForm .error').forEach(error => {
        error.style.display = 'none';
    });

    // Doctor validation
    const doctor = document.getElementById('doctor').value;
    if (!doctor) {
        document.getElementById('doctorError').style.display = 'block';
        isValid = false;
    }

    // Date validation
    const appointmentDate = document.getElementById('appointmentDate').value;
    if (!appointmentDate) {
        document.getElementById('dateError').style.display = 'block';
        isValid = false;
    }

    // Time validation
    const appointmentTime = document.getElementById('appointmentTime').value;
    if (!appointmentTime) {
        document.getElementById('timeError').style.display = 'block';
        isValid = false;
    }

    // Reason validation
    const reason = document.getElementById('reason').value;
    if (!reason.trim()) {
        document.getElementById('reasonError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

// Form Submission Handlers
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateRegistrationForm()) {
        alert('Registration successful! You can now login to your account.');
        showPage('login');
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
        alert('Login successful! Redirecting to your dashboard...');
        showPage('home');
    }
});

appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateAppointmentForm()) {
        alert('Appointment booked successfully!');
        // Reset form
        appointmentForm.reset();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
