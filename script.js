document.querySelectorAll('[data-box]').forEach(box => {
  box.addEventListener('click', () => {
    box.classList.toggle('expanded');
  });
});
