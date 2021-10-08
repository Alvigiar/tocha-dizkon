import './styles/main.scss';
import './node_modules/normalizecss/normalize.css';

// swiper connect
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

// swiper 
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








// burger
const burgerBtn = document.querySelector('.header-burger')
const htmlBody = document.querySelector('body')
const headContent = document.querySelector('.header-content')
const burgerToggle = document.querySelector('.header-burger__toggle')

burgerBtn.addEventListener('click', () => {
  headContent.classList.toggle('active'),
    htmlBody.classList.toggle('off'),
    burgerToggle.classList.toggle('cross')
})

// modal
// document.addEventListener('DOMContentLoaded', () => {
//   const modalEntranceOpen = document.querySelector('.header-cell__btn-input')
//   const modalEntranceClose = document.querySelector('.entrance-box__btn-close')
//   const entranceBox = document.querySelector('.entrance')

//   modalEntranceOpen.addEventListener('click', () => {
//     entranceBox.classList.add('modal--show'),
//       htmlBody.classList.add('off')
//   })

//   modalEntranceClose.addEventListener('click', () => {
//     entranceBox.classList.remove('modal--show'),
//       htmlBody.classList.remove('off')
//   })
// })

// new modal func
// document.querySelector('.header-cell__btn-input').addEventListener('click', () => {
//   document.querySelector('#modalEntrance').classList.add('modal--show')
// })

// const back = document.querySelector('.modal-back')
// const box = document.querySelector('.modal-box')

// back.addEventListener('click', (e) => {
//   if (e.target.classList.contains(box)) {
//     console.log('click')
//   }
// })

// new modal 
const btnEntranceOpen = document.querySelector('.header-cell__btn-input')
const btnRegisterOpen = document.querySelector('.header-cell__btn-reg')
const modalEntranceBox = document.querySelector('.entrance')
const modalRegisterBox = document.querySelector('.register')
const modalBox = document.querySelector('.modal')
let modalBtnClose = document.querySelectorAll('.modal-box__btn-close')

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