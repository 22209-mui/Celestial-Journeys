document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const hamburgermenu = document.getElementById('hambugermenu');
    const menuIcon = document.getElementById('menu-icon');

    hamburger.addEventListener('click', function () {
        const isOpen = hamburgermenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        menuIcon.src = isOpen ? '/assets/close.svg' : '/assets/menu.svg';
        menuIcon.alt = isOpen ? 'Close menu' : 'Open menu';
    });

    hamburgermenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            hamburgermenu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
            menuIcon.src = '/assets/menu.svg';
            menuIcon.alt = 'Open menu';
        });
    });

    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !hamburgermenu.contains(e.target)) {
            hamburgermenu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
            menuIcon.src = '/assets/menu.svg';
            menuIcon.alt = 'Open menu';
        }
    });
});