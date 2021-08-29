import './styles/main.scss';
import './node_modules/normalizecss/normalize.css';


document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header-burger')
  const htmlBody = document.querySelector('body')
  const modalEntranceOpen = document.querySelector('.header-cell__btn-input')
  const modalEntranceClose = document.querySelector('.entrance-box__btn-close')
  const entranceBox = document.querySelector('.entrance')

  burgerBtn.addEventListener('click', () => {
    document.querySelector('.header-content').classList.toggle('active'),
      htmlBody.classList.toggle('off'),
      document.querySelector('.header-burger__toggle').classList.toggle('cross')
  })

  modalEntranceOpen.addEventListener('click', () => {
    entranceBox.classList.add('modal--show'),
      htmlBody.classList.add('off')
  })

  modalEntranceClose.addEventListener('click', () => {
    entranceBox.classList.remove('modal--show'),
      htmlBody.classList.remove('off')
  })
})

