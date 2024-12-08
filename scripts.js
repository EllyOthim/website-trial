function showForm(role) {
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(role + '-form').classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const bg = document.createElement('span');
            bg.classList.add('nav-link-bg');
            link.appendChild(bg);
        });

        link.addEventListener('mouseleave', () => {
            const bg = link.querySelector('.nav-link-bg');
            if (bg) {
                bg.addEventListener('transitionend', () => bg.remove());
                bg.style.opacity = '0';
                bg.style.transform = 'scale(1.05)';
            }
        });
    });
});

