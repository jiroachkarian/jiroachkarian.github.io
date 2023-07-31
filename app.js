let tl = gsap.timeline({
  defaults: { ease: "power2.inOut", duration: 1 },
});
let flagPoles = CSSRulePlugin.getRule(".container");

tl.from(".project", {
  opacity: 0,
  delay: 0.5,
  x: -100,
  ease: "power2.inOut",
  duration: 0.5,
}).to(".project", {
  opacity: 0,
  x: 0,
});
tl.from(".line", {
  opacity: 0,
  xPercent: 100,
  ease: "power2.inOut",
  autoAlpha: 1,
  stagger: 0.2,
  overwrite: "auto",
  duration: 0.5,
});
tl.to(".line", {
  opacity: 1,
  xPercent: 0,
});
tl.from(
  ".text-box",
  {
    opacity: 0,
    scale: 0.7,
  },
  "+=0"
).to(
  ".text-box",
  {
    scale: 1,
    xPercent: 0,
    ease: "power2.inOut",
    autoAlpha: 1,
    overwrite: "auto",
    duration: 0.5,
    opacity: 1,
  },
  "<"
);
tl.from(".link-svg", {
  opacity: 0,
  scale: 0.7,
}).to(".link-svg", {
  scale: 1,
  ease: "power2.inOut",
  overwrite: "auto",
  duration: 0.5,
  opacity: 1,
});

//text hover (h1) in section 2
let text = document.querySelector(".big-text");

let animation = gsap.to(".image", {
  scale: 0.95,
  duration: 0.5,
  paused: true,
  opacity: 0,
});
text.addEventListener("mouseenter", () => animation.play());
text.addEventListener("mouseleave", () => animation.reverse());

// smooth scroll using locomotive
const scroller = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  ease: "power2.inOut",
});

const locoscroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-section]"),
});
