document.querySelectorAll('.theme-colors .color').forEach(color =>{
  color.onclick = () => {
      let background = color.style.background;
      document.querySelector(':root').style.setProperty('--main-color', background);
  }
}); 

let theme = document.querySelector('.themes-container');

document.querySelector('#theme-open').onclick = () =>{
  theme.classList.add('active');
  document.body.style.paddingRight = '0px';
}

document.querySelector('#theme-close').onclick = () =>{
  theme.classList.remove('active');
  document.body.style.paddingRight = '0px';
}


var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  autoplay: {
      delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 200,
      modifier: 1,
      slideShadows: false,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

})