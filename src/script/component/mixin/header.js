let body = document.querySelector('body');
let burgerOpen = document.querySelector('#burger-open');
let burgerClose = document.querySelector('#burger-close');

let wrapper = document.querySelector('.wrapper');

burgerOpen.addEventListener('click', (event) => {body.classList.add('burger-active')});

burgerClose.addEventListener('click', (event) => {body.classList.remove('burger-active')});

wrapper.addEventListener('scroll', (event) => {
  let nowScrollTop = wrapper.scrollTop;
  if (nowScrollTop > 0) {
    wrapper.classList.add('scrolling');
  } else {
    wrapper.classList.remove('scrolling');
  }
})
