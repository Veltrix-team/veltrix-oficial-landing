import { isValidEmail } from './isValidEmail';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  
  form?.addEventListener('submit', async (event) => {
    // Prevenir envío por defecto
    event.preventDefault();

    // Limpiar errores anteriores
    document.querySelectorAll('.error-message').forEach(element => element.remove());

    const formData = new FormData(form);
    const errors = {
      name: '',
      email: '',
      message: ''
    };

    // Validación
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    if (!name) errors.name = 'El nombre es obligatorio';
    if (!email || !isValidEmail(email)) errors.email = 'El email no es válido';
    if (!message) errors.message = 'El mensaje es obligatorio';

    // Mostrar errores
    let hasErrors = false;

    for (const [field, error] of Object.entries(errors)) {
      if (error) {
        hasErrors = true;
        const input = form.querySelector(`[name="${field}"]`);
        const errorElement = document.createElement('p');
        errorElement.className = 'error-message text-red-500 text-sm mt-1';
        errorElement.textContent = error;
        input?.insertAdjacentElement('afterend', errorElement);
        input?.classList.add('border-red-500');
      }
    }

    // Si no hay errores, enviar el formulario
    if (!hasErrors) {
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          window.location.href = '/gracias'; // Redirigir manualmente
        } else {
          const error = await response.json();
          alert(error.message || 'Error al enviar');
        }
      } catch (err) {
        alert('Error de conexión');
      }
    }
  });

  // Limpiar errores al escribir
  form?.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', () => {
      const errorElement = input.nextElementSibling;
      if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
        input.classList.remove('border-red-500');
      }
    });
  });
});
