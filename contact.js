let tl = gsap.timeline({
  default: { ease: "power2.inOut", duration: 0.2 },
});
let flagPoles = CSSRulePlugin.getRule(".section1");

tl.from(".split1", {
  opacity: 0,
  x: -800,
  duration: 2,
}).to(".split1", {
  opacity: 1,
  x: 0,
});
tl.from(".split2 ", {
  opacity: 0,
  x: 600,
  autoAlpha: 1,
  stagger: 0.2,
  overwrite: "auto",
  duration: 1,
}).to(".split2 ", {
  opacity: 1,
  x: 0,
});
tl.from(".h1", {
  opacity: 0,
}).to(".h1", {
  opacity: 1,
});

//hover animation on the contact page
/*
let box1 = document.querySelector(".box1 ");

let animation = gsap.from(".box1 ", {
  duration: 0.5,
  scale: 0.9,
  xPercent: 0,
  paused: true,
});
gsap.to(".box1", {
  scale: 1,
  xPercent: 50,
});

box1.addEventListener("mouseenter", () => animation.play());
box1.addEventListener("mouseleave", () => animation.reverse());*/

//   BUTTON
console.clear();

const buttons = gsap.utils.toArray(".button");
buttons.forEach((item) => {
  let span = item.querySelector("span");
  let tl = gsap.timeline({ paused: true });

  tl.to(span, {
    duration: 0.2,
    yPercent: -150,
    ease: "power2.in",
  });
  tl.set(span, { yPercent: 150 });
  tl.to(span, { duration: 0.2, yPercent: 0 });

  item.addEventListener("mouseenter", () => tl.play(0));
});
