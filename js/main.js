const navTriggerBtn = document.querySelector('#nav_trigger_btn')
const navMenu = document.querySelector('#nav-menu')

// event Listener navbar
navTriggerBtn.addEventListener('click',  () => {
   navMenu.classList.toggle('nav-is-open')
})

// swiper
const swiper = new Swiper('.swiper', {
   loop: true,
   autoplay: {
      delay: 3500,
   },
   speed: 1000,
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   //breakpoint
   slidesPerView: 3,
   spaceBetween: 20,
   breakpoints: {
      320: {
         slidesPerView: 1
      },
      800: {
         slidesPerView: 2
      },
      1200: {
         slidesPerView: 3
      },
   }
})

//scroll reveal aniamtion 
const sr = ScrollReveal({
   origin: 'bottom',
   distance: '60px',
   duration: 2000,
   delay: 200,
   reset: true
})

//hero 
sr.reveal('.hero__text', {origin: 'top'} )

//step
sr.reveal('.steps__step', { distance: '100px' , interval: 100} )
//about
sr.reveal('.about__text',  {origin: 'left'} )
sr.reveal('.about__img',  {origin: 'right', delay: 800} )

//testimonial
sr.reveal('.testimonial__bg',  )
sr.reveal('.testimonial__title',  )
sr.reveal('.testimonial__slider',  { delay: 400} )

//brands
sr.reveal('.brands__img',  {  distance: '100px' , interval: 100})

//work 
sr.reveal('.work__title')
sr.reveal('.work__subtitle' , {delay: 800})
sr.reveal('.work__grid' , {delay: 100})

//stats
sr.reveal('.start')
sr.reveal('.stats__item' , {distance: '100px' , interval: 100})

//news
sr.reveal('.news__title')
sr.reveal('.news__subtitle' , {delay: 800})
sr.reveal('.news__grid' , {distance: '100px' , interval: 100 , delay: 1000})

//contact
sr.reveal('.contact__container')
sr.reveal('.contact__text' , { delay: 100})

//footer
sr.reveal('.footer__item' , {distance: '100px' , interval: 100})
sr.reveal('.footer__copyright')
