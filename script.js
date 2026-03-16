if (typeof Typed !== 'undefined') {
    new Typed(".text", {
        strings: ["Full Stack Developer", "Problem Solver", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
} else {
    const typedFallback = document.querySelector('.text');
    if (typedFallback) {
        typedFallback.textContent = 'Full Stack Developer';
    }
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent! Thank you for contacting me.');
        this.reset();
    });
}
