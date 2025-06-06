document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const headerNav = document.querySelector('.header__nav');
    const menuLinks = document.querySelectorAll('.nav__link');
    const body = document.body;

    function toggleMenu() {
        menuBtn.classList.toggle('active');
        headerNav.classList.toggle('active');
        const isOpen = headerNav.classList.contains('active');
        headerNav.setAttribute('aria-hidden', !isOpen);
        menuBtn.setAttribute('aria-expanded', isOpen);
        body.classList.toggle('no-scroll', isOpen);
    }

    menuBtn.addEventListener('click', toggleMenu);

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (headerNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Accessibility: close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && headerNav.classList.contains('active')) {
            toggleMenu();
        }
    });
}); 