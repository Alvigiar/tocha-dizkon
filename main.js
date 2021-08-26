import '/styles/main.scss';
import '/node_modules/normalizecss/normalize.css';


document.addEventListener('DOMContentLoaded', () => {
  const btnBurger = document.querySelector('.nav-burger')
  const btnInput = document.querySelector('.nav-btn__input')
  const modalInput = document.querySelector('.modal-input')
  const modalInputClose = document.querySelector('.input-box__btn-close')

  const headBurger = document.querySelector('.header-nav__content')

  btnBurger.addEventListener('click', () => {
    document.querySelector('.header-nav__content').classList.toggle('active'),
      document.querySelector('body').classList.toggle('off'),
      document.querySelector('.nav-burger__toggle').classList.toggle('cross')
  })

  btnInput.addEventListener('click', () => {
    modalInput.classList.add('modal-input-show'),
    document.querySelector('body').classList.add('off'),
    document.querySelector('.input-box__background').classList.add('.show-back')
  })

  modalInputClose.addEventListener('click', () => {
    modalInput.classList.remove('modal-input-show'),
    document.querySelector('body').classList.remove('off')
  })
})