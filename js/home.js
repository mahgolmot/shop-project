const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//header and navbar
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  //   navMenu.classList.add("nav-logo-open");
});
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// carousel-slider

const slider = document.getElementById('slider');

document.addEventListener('click', (e) => {
  const items = document.querySelectorAll('.slider-item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
});

//carousel

let navLinks = document.querySelectorAll('.carousel .nav-link');
let slides = document.querySelectorAll('.carousel .slides img');
let overlays = document.querySelectorAll('.carousel .bar');
let maxZIndex = navLinks.length;
let easeInOutQuart = 'cubic-bezier(0.77, 0, 0.175, 1)';

slides[0].classList.add('active');
navLinks[0].classList.add('active');

navLinks.forEach((navLink, activeIndex) => {
  overlays[activeIndex].style.zIndex = `${navLinks.length - activeIndex}`;
  navLink.addEventListener('click', () => {
    // nav-link
    navLinks.forEach((navLink) => navLink.classList.remove('active'));
    navLink.classList.add('active');
    // slide
    let currentSlide = document.querySelector('.carousel .slides img.active');
    let slideFadeOut = currentSlide.animate(
      [
        { transform: 'translateX(0)', opacity: 1 },
        { transform: 'translateX(5%)', opacity: 0 },
      ],
      {
        duration: 600,
        easing: 'ease-in',
        fill: 'forwards',
      },
    );
    slideFadeOut.onfinish = () => {
      slides.forEach((slide) => slide.classList.remove('active'));
      let activeSlide = slides[activeIndex];
      activeSlide.classList.add('active');
      activeSlide.animate(
        [
          {
            transform: 'translateX(-5%)',
            opacity: 0,
          },
          {
            transform: 'translateX(0)',
            opacity: 1,
          },
        ],
        { duration: 600, easing: 'ease-out', fill: 'forwards' },
      );
    };
    // overlay
    maxZIndex += 1;
    let activeOverlay = overlays[activeIndex];
    activeOverlay.style.zIndex = `${maxZIndex}`;
    activeOverlay.animate(
      [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
      { duration: 1200, fill: 'forwards', easing: easeInOutQuart },
    );
  });
});
