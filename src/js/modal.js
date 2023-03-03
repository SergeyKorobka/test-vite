(() => {
  const ref = {
    openBtn: document.querySelector('[data-open]'),
    closeBtn: document.querySelector('[data-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  ref.openBtn.addEventListener('click', toggleModal);
  ref.closeBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    ref.modal.classList.toggle('is-hidden');
  }
})();
