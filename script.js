// Smooth scroll to contact section
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Add scroll animations when elements come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body to prevent flash of unstyled content
    document.body.classList.add('loaded');
    
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.card');
    
    sections.forEach(section => observer.observe(section));
    cards.forEach(card => observer.observe(card));
});