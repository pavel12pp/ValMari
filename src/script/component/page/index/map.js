//optimization google maps(если мы сразу не видим карту, то загружаем карту на первом слайде только когда мы увидим 10 процентов от его поверхности, иначе сразу отображаем)
document.addEventListener('DOMContentLoaded', function () {
  const iframe = document.querySelector('.footer__map iframe');

  function loadIframe() {
    if (iframe && !iframe.src) {
      iframe.src = iframe.getAttribute('data-src');
    }
  }

  if (iframe.getBoundingClientRect().top < window.innerHeight) {
    loadIframe();
  } else {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadIframe();
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
    observer.observe(iframe);
  }

});
