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
const modalBox = document.querySelector('.modal')
const btnModalClose = document.querySelectorAll('.modal-box__btn-close')
const widthScroll = window.innerWidth - document.body.offsetWidth

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
  let entranceOpen = new Modal(htmlBody, headContent, burgerToggle, modalBox)
  entranceOpen.modalEntranceOpen()
})

btnRegisterOpen.addEventListener('click', () => {
  let registerOpen = new Modal(htmlBody, headContent, burgerToggle, modalBox)
  registerOpen.modalRegisterOpen()
})

btnModalClose.forEach(element => {
  element.addEventListener('click', () => {
    let modalClose = new Modal(htmlBody, headContent, burgerToggle, modalBox)
    modalClose.modalClose()
  })
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    let btnModalClose = new Modal(htmlBody, headContent, burgerToggle, modalBox)
    btnModalClose.modalClose()
  }
})

modalBox.addEventListener('click', (e) => {
  if (e.target == document.querySelector('.modal')) {
    let btnModalClose = new Modal(htmlBody, headContent, burgerToggle, modalBox)
    btnModalClose.modalClose()
  }
})

class Modal {
  constructor(htmlBody, headContent, burgerToggle, modalBox) {
    this.htmlBody = htmlBody
    this.headContent = headContent
    this.burgerToggle = burgerToggle
    this.modalBox = modalBox
    this.entranceBox = document.querySelector('.entrance')
    this.registerBox = document.querySelector('.register')
    this.btnClose = document.querySelectorAll('.modal-box__btn-close')
  }

  modalEntranceOpen() {
    this.entranceBox.classList.add('modal-entrance--show')
    this.htmlBody.classList.add('off')
    this.headContent.classList.remove('active')
    this.burgerToggle.classList.remove('cross')
    this.htmlBody.style.paddingRight = widthScroll
    modalBox.classList.add('modal--show')
  }

  modalRegisterOpen() {
    this.registerBox.classList.add('modal-register--show')
    this.htmlBody.classList.add('off')
    this.headContent.classList.remove('active')
    this.burgerToggle.classList.remove('cross')
    this.htmlBody.style.paddingRight = widthScroll
    modalBox.classList.add('modal--show')
  }

  modalClose() {
    this.entranceBox.classList.remove('modal-entrance--show')
    this.registerBox.classList.remove('modal-register--show')
    this.htmlBody.classList.remove('off')
    this.htmlBody.style.paddingRight = ''
    modalBox.classList.remove('modal--show')
  }
}