document.addEventListener("DOMContentLoaded", (e) => {
  gsap.registerPlugin(ScrollTrigger);

  const wrapper = document.querySelector(".image-wrapper");
  const scrollDistance = wrapper.scrollWidth - window.innerWidth;

  gsap.to(wrapper, {
    x: () => `-${scrollDistance}px`,
    ease: "power1.inOut",
    scrollTrigger: {
        scrub: true,
        start: "start start",
        end: "bottom bottom",
    },
  });
});

const lenis = new Lenis({
  duration: 1.2, // Reduce duration for faster response
  smooth: true,
  easing: (t) => 1 - Math.pow(1 - t, 3), // Linear easing for quicker reaction
  smoothTouch: true,
  touchMultiplier: 1.5, // Make it more responsive on touch
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
