// navbar toggle button behavior
const menuToggle = document.getElementById('menuToggle');
const menuModal = document.getElementById('menuModal');
const closeModal = document.getElementById('closeModal');

menuToggle.addEventListener('click', () => {
  menuModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  menuModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === menuModal) {
    menuModal.style.display = 'none';
  }
});
