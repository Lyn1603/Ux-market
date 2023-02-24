let navbar = document.querySelector('.navbar');
let threshold = navbar.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > threshold) {
    navbar.classList.add('block');
  } else {
    navbar.classList.remove('block');
  }
})
