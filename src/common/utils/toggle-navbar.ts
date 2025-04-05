document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#menu-toggle');
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelectorAll("#mobile-menu a"); // Captura todos los enlaces del menú móvil

    menuToggle?.addEventListener("click", () => {
        if (menu?.classList.contains('hidden')) {
            menu?.classList.remove('hidden', 'animate__fadeOutUp');
            menu?.classList.add("", "animate__fadeInDown", "animate__faster");
        } else {
            closeMenu();
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    function closeMenu() {
        menu?.classList.remove('animate__fadeInDown');
        menu?.classList.add('animate__fadeOutUp');


        menu?.classList.add('hidden');

    }
});
