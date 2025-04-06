const buttons = document.querySelectorAll('.subject-btn');
const subjectInput = document.getElementById('subject-field');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!(btn instanceof HTMLButtonElement) || !(subjectInput instanceof HTMLInputElement)) return;

    subjectInput.value = btn.dataset.value || '';

    buttons.forEach((b) => {
      if (b instanceof HTMLElement) {
        b.classList.remove(
          'bg-sky-900',
          'text-white',
          'dark:bg-sky-600',
          'dark:text-white'
        );
      }
    });

    btn.classList.add('bg-sky-900', 'text-white', 'dark:bg-sky-600', 'dark:text-white');
  });
});