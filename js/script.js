const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
const header = document.getElementById('sus')
const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const card3 = document.getElementById('card3')
let counter = 1

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.popup.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.popup')
        closeModal(modal)
    })
})


function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    header.classList.remove('backgroundNav')
    header.classList.add('bgr2')
    if (counter % 2 == 0) {
        card1.classList.remove('cardCustomColor1')
        card1.classList.add('bgr2')
        card3.classList.remove('cardCustomColor3')
        card3.classList.add('bgr2')
    }


}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    header.classList.remove('bgr2')
    header.classList.add('backgroundNav')
    counter += 1;
    if (counter % 2 == 0) {
        card1.classList.remove('bgr2')
        card1.classList.add('cardCustomColor1')
        card3.classList.remove('bgr2')
        card3.classList.add('cardCustomColor3')
    }
}

