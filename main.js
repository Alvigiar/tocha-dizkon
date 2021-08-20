import '/styles/main.scss';
import '/node_modules/normalizecss/normalize.css';

const btnBurger = document.querySelector('.nav-burger')
const btnInput = document.querySelector('.nav-btn__input')
const modalInput = document.querySelector('.modal-input')
const modalInputClose = document.querySelector('.input-box__btn-close')


btnBurger.addEventListener('click', () => {
  document.querySelector('.header-nav__content').classList.toggle('active'),
    document.querySelector('body').classList.toggle('off'),
    document.querySelector('.nav-burger__toggle').classList.toggle('cross')
})

btnInput.addEventListener('click', () => {
  modalInput.classList.add('modal-input-show')
})

modalInputClose.addEventListener('click', () => {
  modalInput.classList.remove('modal-input-show')
})

