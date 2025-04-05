document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const html = document.documentElement;

    // Verificar la preferencia de tema almacenada
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        html.classList.add(storedTheme);
        updateIcon();
    } else {
        // Si no hay una preferencia almacenada, ocultar el botón
        if (toggleButton) {
            toggleButton.style.display = 'none';
        }
    }

    // Alternar el tema al hacer clic en el botón
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            html.classList.toggle('dark');
            const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
            updateIcon();
        });
    }

    //actualizar el icono del tema
    function updateIcon() {
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            themeIcon.setAttribute('src', html.classList.contains('dark') ? '/mode_light.svg' : '/mode_night.svg');
        }
    }
});
