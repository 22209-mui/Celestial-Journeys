document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('hamburgermenu');
    const menuIcon = document.getElementById('menu-icon');

    // Toggles the open/close icons when the hamburger menu button is clicked
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation(); // Stops the click from rising and immediately closing the menu
        const isOpen = menu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        menuIcon.src = isOpen ? '/assets/close.svg' : '/assets/menu.svg';
    });

    // Closes the menu when a link inside it is clicked
    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
            menuIcon.src = '/assets/menu.svg';
        });
    });

    // Closes the menu when clicking outside of it
    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
            menuIcon.src = '/assets/menu.svg';
        }
    });
});