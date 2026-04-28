document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('hamburgermenu');
    const menuIcon = document.getElementById('menu-icon');

    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = menu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        menuIcon.src = isOpen ? '/assets/close.svg' : '/assets/menu.svg';
    });

    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
            menuIcon.src = '/assets/menu.svg';
        });
    });

    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
            menuIcon.src = '/assets/menu.svg';
        }
    });
});