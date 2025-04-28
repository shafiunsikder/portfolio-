// Form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thanks for reaching out! I will get back to you soon.');
    this.reset();
});

// Simple scroll animation
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});
