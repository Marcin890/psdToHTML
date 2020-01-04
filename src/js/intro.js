import gsap from "gsap";
import { TimelineMax } from "gsap/all.js";

const show = () => {
  const tl = new TimelineMax({ repeat: 0 });
  const ornament = document.querySelectorAll(".intro__wrapper");
  tl.set(ornament, { opacity: 0 }).staggerTo(ornament, 2.5, {
    opacity: 1
  });
  return tl;
};

const rotation = () => {
  const tl = new TimelineMax({ repeat: -1, yoyo: true });
  const arcs = document.querySelector(".intro__outerArcs");
  tl.set(arcs, { transformOrigin: "50% 50%" }).to(arcs, 10, {
    rotate: 360
  });
  return tl;
};

const main = new TimelineMax();
main.add(show());
main.add(rotation());

const intro = document.querySelector(".intro");
intro.addEventListener("click", () => {
  intro.classList.add("hide");
});
