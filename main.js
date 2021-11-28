import './styles/main.scss';
import './node_modules/normalizecss/normalize.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {

  Swiper.use([Navigation, Pagination]);

  const burgerBtn = document.querySelector('.header-burger')
  const htmlBody = document.querySelector('body')
  const burgCross = document.querySelector('.header-burger__toggle')
  const headContent = document.querySelector('.header-content')
  const burgerToggle = document.querySelector('.header-burger__toggle')
  const btnOpenModalEntrance = document.querySelector('#open-entrance')
  const btnOpenModalRegister = document.querySelector('#open-register')

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

  btnOpenModalEntrance.addEventListener('click', () => {
    const modalEntrance = document.querySelector('#modal-entrance')
    const modalOpen = new Modal(modalEntrance, burgCross, headContent, htmlBody)
    modalOpen.open()
  })

  btnOpenModalRegister.addEventListener('click', () => {
    const modalRegister = document.querySelector('#modal-register')
    const modalOpen = new Modal(modalRegister, burgCross, headContent, htmlBody)
    modalOpen.open()
  })

  class Modal {
    constructor(modalBox, burgCross, headContent, htmlBody) {
      this.modal = modalBox
      this.modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal--show')) {
          this.close()
        }
      })
      this.btnClose = modalBox.querySelector('.modal__btn-close')
      this.btnClose.addEventListener('click', () => {
        this.close()
      })
      this.cross = burgCross
      this.head = headContent
      this.body = htmlBody
    }

    open() {
      this.modal.classList.add('modal--hide')
      this.cross.classList.remove('cross')
      this.head.classList.remove('menu--active')
      this.body.classList.add('off')
      setTimeout(() => {
        this.modal.classList.add('modal--show')
      }, 0);
    }

    close() {
      this.modal.classList.add('modal--hide')
      this.modal.classList.remove('modal--show')
      this.body.classList.remove('off')
      setTimeout(() => {
        this.modal.classList.remove('modal--hide')
      }, 500);
    }
  }

  burgerBtn.addEventListener('click', () => {
    const burg = new Menu(htmlBody, burgCross, headContent)

    if (burgerToggle.classList.contains('cross')) {
      burg.close()
    } else {
      burg.open()
    }
  })

  class Menu {
    constructor(body, cross, head) {
      this.body = body
      this.cross = cross
      this.head = head
    }

    open() {
      this.body.classList.add('off')
      this.cross.classList.add('cross')
      this.head.classList.add('menu--active')
    }

    close() {
      this.body.classList.remove('off')
      this.cross.classList.remove('cross')
      this.head.classList.remove('menu--active')
    }
  }
})