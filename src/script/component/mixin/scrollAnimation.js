import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultTransfromXPercent = 50;
const defaultTransfromYPercent = 20;
const defaultOpacity = 0;
const defaultDuration = 1;

gsap.from('.hero__subtitle', {
  y: "10dvh",
  duration: 1,
  opacity: 0.5,
  delay: 0,
  scrollTrigger: {
    trigger: ".hero__subtitle",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.hero__title', {
  y: "10dvh",
  duration: 1,
  opacity: 0.5,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".hero__title",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.hero__text', {
  y: "10dvh",
  duration: 1,
  opacity: 0.5,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".hero__text",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.hero__links', {
  y: "10dvh",
  duration: 1,
  opacity: 0.5,
  delay: 0.6,
  scrollTrigger: {
    trigger: ".hero__links",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.hero__image', {
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".hero__image",
    start: "top 90%",
    end: "bottom 0%",
  }
})

gsap.from('.stat__container', {
  y: "10dvh",
  duration: 1,
  opacity: 0,
  delay: 0.8,
  scrollTrigger: {
    trigger: ".stat__container",
    start: "top 90%",
    end: "bottom 0%",
  }
})

gsap.from('.course__title', {
  y: "10dvh",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".course__title",
    start: "top 90%",
    end: "bottom 0%",
  }
})

gsap.from('.about__title', {
  y: "10dvh",
  duration: 1,
  opacity: 0.5,
  scrollTrigger: {
    trigger: ".about__title",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.about__subtitle', {
  y: "10dvh",
  duration: 1,
  opacity: 0.5,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".about__subtitle",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.about__text', {
  y: "10dvh",
  duration: 1,
  opacity: 0.5,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".about__text",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.about__image', {
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about__image",
    start: "top 90%",
    end: "bottom 0%",
  }
})

gsap.from('.train__image', {
  y: "10dvh",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".train__image",
    start: "top 90%",
    end: "bottom 0%",
  }
})

gsap.from('.model__title', {
  y: "10dvh",
  duration: 1,
  opacity: 0.6,
  scrollTrigger: {
    trigger: ".model__image",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.model__text', {
  y: "10dvh",
  duration: 1,
  opacity: 0.6,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".model__text",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.model__link', {
  y: "10dvh",
  duration: 1,
  opacity: 0.6,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".model__link",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.model__image', {
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".model__image",
    start: "top 90%",
    end: "bottom 0%",
  }
})

gsap.from('.master__title', {
  y: "10dvh",
  duration: 1,
  opacity: 0.6,
  scrollTrigger: {
    trigger: ".master__title",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.master__description', {
  y: "10dvh",
  duration: 1,
  opacity: 0.6,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".master__description",
    start: "top 90%",
    end: "bottom 0%",
  }
})

gsap.from('.why__title', {
  y: "10dvh",
  duration: 1,
  opacity: 0.6,
  scrollTrigger: {
    trigger: ".why__title",
    start: "top 90%",
    end: "bottom 0%",
  }
})
gsap.from('.why__point', {
  y: "10dvh",
  duration: 1,
  opacity: 0.6,
  stagger: {
    from: 'center',
    amount: 0.4,
  },
  scrollTrigger: {
    trigger: ".why__point",
    start: "top 90%",
    end: "bottom 0%",
  }
})

gsap.from('.stock__title', {
  y: "10dvh",
  duration: 1,
  opacity: 0.6,
  scrollTrigger: {
    trigger: ".stock__title",
    start: "top 90%",
    end: "bottom 0%",
  }
})