// Navbar Scroll Effect
document.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth Scrolling Function
function smoothScroll(target, duration) {
    let targetElement = document.querySelector(target);
    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    let startPosition = window.scrollY;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = easeInOutQuad(timeElapsed, startPosition, targetPosition - startPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Apply smooth scrolling to all nav links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        let targetId = this.getAttribute('href');
        smoothScroll(targetId, 800);
    });
});

// Apply smooth scrolling to CTA button
document.querySelector('.cta-button').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('#discord', 800);
});

// Select elements
const hamburger = document.getElementById('hamburger');
const navPanel = document.getElementById('nav-panel');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('.nav-panel a');

// Open panel when hamburger is clicked
hamburger.addEventListener('click', () => {
    navPanel.classList.add('active');
});

// Close panel when close button is clicked
closeBtn.addEventListener('click', () => {
    navPanel.classList.remove('active');
});

// Close panel when a navigation link is clicked (on mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navPanel.classList.remove('active');
    });
});
