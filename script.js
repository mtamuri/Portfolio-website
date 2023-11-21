const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const sectionId = event.target.getAttribute('href');
        const section = document.querySelector(sectionId);

        window.scrollTo({
            behavior: 'smooth',
            top: section.offsetTop
        });
    });
});
