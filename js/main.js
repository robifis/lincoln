const images = document.querySelectorAll('.imageGrid img');
const modalImage = document.querySelector('#new');
const outerModal = document.querySelector('.outerModal');

console.log(images);

function imageClick(e) {
  modalImage.src = e.target.src;
  outerModal.classList.add('outerModalActive');
}

function closeModal(e) {
  if (e.target === outerModal) {
    outerModal.classList.remove('outerModalActive');
  }
}

images.forEach(image => image.addEventListener('click', imageClick));
window.addEventListener('click', closeModal);
