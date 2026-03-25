import { gsap } from "gsap";

export const ButtonHover = () => {

  const links = document.querySelectorAll(".flip-link");

  links.forEach((link) => {

    const topText = link.querySelector(".top");
    const bottomText = link.querySelector(".bottom");

    gsap.set(bottomText, { y: "100%" });

    link.addEventListener("mouseenter", () => {
      gsap.to(topText, {
        y: "-100%",
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(bottomText, {
        y: "0%",
        duration: 0.4,
        ease: "power2.out"
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(topText, {
        y: "0%",
        duration: 0.4
      });

      gsap.to(bottomText, {
        y: "100%",
        duration: 0.4
      });
    });

  });

};