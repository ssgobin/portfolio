// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scroll for "Veja Meus Projetos" button
document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

// Typing effect for hero section
const heroTitle = document.querySelector('#hero h1');
const text = heroTitle.textContent;
heroTitle.textContent = '';
let index = 0;

function typeEffect() {
    if (index < text.length) {
        heroTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

// Scroll animations for sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Activate background animation on load
window.addEventListener('load', () => {
    document.querySelectorAll('.circle').forEach(circle => {
        circle.style.animationPlayState = 'running';
    });
});
