import { TimelineMax } from "gsap";
import { gsap } from "gsap";
gsap.registerPlugin(TimelineMax);
const show = () => {
  const tl = new TimelineMax({ repeat: 0 });
  const ornament = document.querySelectorAll(".intro__wrapper");
  tl.set(ornament, { opacity: 0 }).staggerTo(ornament, 1.5, {
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

const button = () => {
  const tl = new TimelineMax({ repeat: -1, yoyo: true });
  const button = document.querySelector(".intro__button");
  tl.to(button, 1.2, { scale: 0.9 });
  return tl;
};

const dots = () => {
  const tl = new TimelineMax({ repeat: -1, yoyo: false });
  const dots = document.querySelectorAll(".intro__outerCircle-item");
  const color = () => {
    const colors = ["#808000", "#FFA500", "#663399"];
    return colors[Math.floor(Math.random() * 3)];
  };
  tl.staggerTo(
    dots,
    1,
    {
      stroke: color
    },
    0.5
  );

  return tl;
};

const main = new TimelineMax();

main.add(show());
main.add("start");
main.add(dots(), "start");
main.add(rotation(), "start");
main.add(button(), "start");

const intro = document.querySelector(".intro");
intro.addEventListener("click", () => {
  intro.classList.add("hide");
});
