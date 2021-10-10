import './styles/main.scss';
import './node_modules/normalizecss/normalize.css';

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

const burgerBtn = document.querySelector('.header-burger')
const htmlBody = document.querySelector('body')
const headContent = document.querySelector('.header-content')
const burgerToggle = document.querySelector('.header-burger__toggle')
const btnEntranceOpen = document.querySelector('.header-cell__btn-input')
const btnRegisterOpen = document.querySelector('.header-cell__btn-reg')
const modalEntranceBox = document.querySelector('.entrance')
const modalRegisterBox = document.querySelector('.register')
const modalBox = document.querySelector('.modal')
const modalBtnClose = document.querySelectorAll('.modal-box__btn-close')

var swiperTariff = new Swiper(".swiperTariff", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1440: {
      slidesPerView: 3
    }
  },
});

var swiperConnection = new Swiper(".swiperConnection", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3
    },
  },
});

var swiperRevievs = new Swiper(".swiperRevievs", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5
    },
    1440: {
      slidesPerView: 2
    },
  },
})

burgerBtn.addEventListener('click', () => {
  headContent.classList.toggle('active'),
    htmlBody.classList.toggle('off'),
    burgerToggle.classList.toggle('cross')
})

btnEntranceOpen.addEventListener('click', () => {
  let btnEntranceOpen = new Modal(open)
  btnEntranceOpen.modalEntranceOpen()
})

btnRegisterOpen.addEventListener('click', () => {
  let btnRegisterOpen = new Modal(open)
  btnRegisterOpen.modalRegisterOpen()
})

modalBtnClose.forEach(element => {
  element.addEventListener('click', () => {
    let modalBtnClose = new Modal(close)
    modalBtnClose.modalClose()
  })
})

class Modal {
  constructor(open, close) {
    this.open = open
    this.close = close
  }

  modalEntranceOpen(open) {
    modalEntranceBox.classList.add('modal-entrance--show')
    modalBox.classList.add('modal--show')
    htmlBody.classList.add('off')
    headContent.classList.remove('active')
    burgerToggle.classList.remove('cross')
  }

  modalRegisterOpen(open) {
    modalRegisterBox.classList.add('modal-register--show')
    modalBox.classList.add('modal--show')
    htmlBody.classList.add('off')
    headContent.classList.remove('active')
    burgerToggle.classList.remove('cross')
  }

  modalClose(close) {
    modalEntranceBox.classList.remove('modal-entrance--show')
    modalRegisterBox.classList.remove('modal-register--show')
    modalBox.classList.remove('modal--show')
    htmlBody.classList.remove('off')
  }
}