let body = document.querySelector('body');
let burgerOpen = document.querySelector('#burger-open');
let burgerClose = document.querySelector('#burger-close');

burgerOpen.addEventListener('click', (event) => {body.classList.add('burger-active')});

burgerClose.addEventListener('click', (event) => {body.classList.remove('burger-active')});