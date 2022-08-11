const buyTk = document.querySelectorAll('.js-buy-tk')
const modal = document.querySelector('.js-modal')
const close = document.querySelector('.js-modal-close')

function showTk() {
    modal.classList.add('opend')
}

function hideTk() {
    modal.classList.remove('opend')
}

for (const i of buyTk) {
    i.addEventListener('click', showTk  )
}

close.addEventListener('click', hideTk)