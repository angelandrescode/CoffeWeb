import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(SplitText);

// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

document.fonts.ready.then(() => {
  gsap.set(".split", { opacity: 1 });

  let split;
  SplitText.create(".split-words", {
    type: "words",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (self) => {
      split = gsap.from(self.words, {
        duration: 0.6,
        yPercent: 100,
        opacity: 0,
        filter: "blur(5px)",
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.1,
      });
      return split;
    },
  });
  SplitText.create(".split-lines", {
    type: "lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
    onSplit: (self) => {
      split = gsap.from(self.lines, {
        duration: 0.6,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.1,
      });
      return split;
    },
  });
});

gsap.from(".card-animate", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
  delay: 0.1,
});
