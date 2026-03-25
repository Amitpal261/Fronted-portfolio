import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { FaReact, FaNodeJs, FaPython, FaFigma } from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiExpress,
} from "react-icons/si";

export default function SkillsSlider() {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
   
     
    // 🔥 Duplicate content for seamless loop
    slider.innerHTML += slider.innerHTML;

    // 🎬 GSAP Animation
    const anim = gsap.to(slider, {
      xPercent: -50,
      duration: 25,
      ease: "linear",
      repeat: -1,
    });

    animationRef.current = anim;

    // 🖱️ Hover Pause
    const handleMouseEnter = () => anim.pause();
    const handleMouseLeave = () => {
      if (!isPaused) anim.play();
    };

    // 👆 Click Toggle Pause
    const handleClick = () => {
      if (anim.paused()) {
        anim.play();
        setIsPaused(false);
      } else {
        anim.pause();
        setIsPaused(true);
      }
    };

    const container = containerRef.current;
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click", handleClick);

    return () => {
      anim.kill();
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
    };
  }, []);

  const skills = [
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* 🔥 Left Fade */}
      <div className="absolute left-0 top-0 h-full w-14 md:w-44 bg-gradient-to-r from-bg to-transparent z-10"></div>

      {/* 🔥 Right Fade */}
      <div className="absolute right-0 top-0 h-full w-14 md:44 bg-gradient-to-l from-bg to-transparent z-10"></div>

      {/* 🎬 Slider Container */}
      <div ref={containerRef} className="cursor-pointer overflow-hidden">
        <div ref={sliderRef} className="flex gap-6 w-max">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 
              bg-bg/10 backdrop-blur-lg border border-text 
              rounded-full text-text text-lg font-semibold
              whitespace-nowrap
              hover:scale-110 hover:bg-primary hover:text-text
              transition duration-300"
            >
              <span className="text-2xl">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
