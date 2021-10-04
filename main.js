import './styles/main.scss';
import './node_modules/normalizecss/normalize.css';
import Swiper, { Autoplay } from 'swiper';


// document.addEventListener('DOMContentLoaded', () => {
//   const burgerBtn = document.querySelector('.header-burger')
//   const htmlBody = document.querySelector('body')
//   const modalEntranceOpen = document.querySelector('.header-cell__btn-input')
//   const modalEntranceClose = document.querySelector('.entrance-box__btn-close')
//   const entranceBox = document.querySelector('.entrance')

//   burgerBtn.addEventListener('click', () => {
//     document.querySelector('.header-content').classList.toggle('active'),
//       htmlBody.classList.toggle('off'),
//       document.querySelector('.header-burger__toggle').classList.toggle('cross')
//   })

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

document.querySelector('.header-cell__btn-input').addEventListener('click', () => {
  document.querySelector('#modalEntrance').classList.add('modal--show')
})



const back = document.querySelector('.modal-back')
const box = document.querySelector('.modal-box')

back.addEventListener('click', (e) => {
  if (e.target.classList.contains(box)) {
    console.log('click')
  }
})

// swiper 
var swiperTarif = new Swiper(".swiperTariff", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2
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

var swiperRevievs = new Swiper (".swiperRevievs", {
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