document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-theme');
    const html = document.documentElement;

    // Detectar preferencia guardada o del sistema
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
        html.classList.add(storedTheme);
    } else if (prefersDark) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }

    updateIcon();

    // Alternar el tema al hacer clic en el botón
    toggleButton?.addEventListener('click', () => {
        html.classList.toggle('dark');
        const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        updateIcon();
    });

    // Cambiar el icono de tema según el modo actual
    function updateIcon() {
        const themeIcon = document.getElementById('theme-icon');
        if (!themeIcon) return;

        const isDark = html.classList.contains('dark');
        themeIcon.setAttribute('src', isDark ? '/mode_light.svg' : '/mode_night.svg');
        themeIcon.setAttribute('alt', isDark ? 'Cambiar a claro' : 'Cambiar a oscuro');
    }
});
