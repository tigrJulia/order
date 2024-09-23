const modal_active = 'modal_active';
const closeBtn = document.querySelectorAll('.modal__close');

const modals = [
    { modal: document.querySelector('#modal1'), openBtn: document.querySelector('#search1') },
    { modal: document.querySelector('#modal2'), openBtn: document.querySelector('#search2') },
    { modal: document.querySelector('#modal3'), openBtn: document.querySelector('#search3') }
];

modals.forEach(({ modal, openBtn }) => {
    openBtn.addEventListener('click', () => {
        modal.classList.add(modal_active);
    });
});

const closeModal = () => {
    modals.forEach(({ modal }) => {
        modal.classList.remove(modal_active);
    });
};

closeBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeModal();
    });
});
