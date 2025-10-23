const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const greetings = ["Hello!", "ನಮಸ್ಕಾರ", "नमस्ते", "こんにちは", "Bonjour!", "Hola!"];
const greetingElement = document.getElementById("greeting");
let greetingIndex = 0;
let charIndex = 0;
let isDeleting = false;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

const spotlight = document.querySelector('.spotlight');
document.addEventListener('mousemove', (e) => {
    spotlight.style.setProperty('--x', `${e.clientX}px`);
    spotlight.style.setProperty('--y', `${e.clientY}px`);
    spotlight.style.opacity = '1';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function typeGreeting() {
    const current = greetings[greetingIndex];
    if (!isDeleting && charIndex < current.length) {
        greetingElement.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeGreeting, 120);
    } else if (isDeleting && charIndex > 0) {
        greetingElement.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeGreeting, 80);
    } else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(typeGreeting, 1000);
        } else {
            isDeleting = false;
            greetingIndex = (greetingIndex + 1) % greetings.length;
            setTimeout(typeGreeting, 500);
        }
    }
}

typeGreeting();