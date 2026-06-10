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
