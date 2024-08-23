// Add interactive and futuristic elements
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle nav menu in mobile view
    const nav = document.querySelector('nav ul');
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector('header').appendChild(navToggle);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});
