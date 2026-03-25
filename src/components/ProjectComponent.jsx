import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { projects } from "../utils/ServiceData";
import { FaArrowRight } from "react-icons/fa";
import { getProjects } from "../services/api";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ProjectComponent = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const cursorRef = useRef(null);
  const [pro, setProjects] = useState([]);
  //console.log(pro);
  const navigate = useNavigate()
   // ✅ Fetch API Data
   useEffect(() => {
     const fetchProjects = async () => {
       try {
         const token = localStorage.getItem("token");
         console.log("Token:", token);
 
         const data = await getProjects(token);
        //  console.log("Projects:", data);
 
         setProjects(data);
       } catch (error) {
         console.log("Fetch error:", error);
       }
     };
 
     fetchProjects();
   }, []);
  useEffect(() => {
  if (!pro.length) return; // Only run when projects exist

  const ctx = gsap.context(() => {
    const panels = gsap.utils.toArray(".panel");
    gsap.set(sliderRef.current, { width: `${panels.length * 100}vw` });

    const tl = gsap.timeline({
      scrollTrigger: {
        id: "projects-scroll",
        trigger: containerRef.current,
        start: "bottom 100%",
        end: () => `+=${panels.length * 800}`,
        scrub: 1,
        pin: true,
        pinReparent: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    panels.forEach((panel, i) => {
      tl.to(panel, { xPercent: -100 * i, duration: 1, ease: "power2.out" }, i * 0.6);
    });

    panels.forEach((panel) => {
      gsap.fromTo(
        panel,
        { scale: 0.9, opacity: 1 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: panel,
            containerAnimation: tl,
            start: "left top",
            end: "center center",
            scrub: true,
          },
        }
      );
    });

    const moveCursor = (e) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.2 });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, containerRef);

  return () => {
    ScrollTrigger.getById("projects-scroll")?.kill();
    ctx.revert();
  };
}, [pro]); // ✅ Depend on projects

  // 🔥 3D TILT
  const handleMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 18;
    const rotateY = (x - rect.width / 2) / 18;

    gsap.to(el, {
      rotateX,
      rotateY,
      scale: 1.04,
      transformPerspective: 1200,
      duration: 0.3,
    });
  };

  const resetTilt = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.4,
    });
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#0a0a0a] text-text overflow-hidden relative bg-bg"
    >
      {/* 🔥 Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 md:w-5 md:h-5 md:text-[6px] bg-bg/10 backdrop-blur-xl rounded-full flex items-center justify-center text-xs pointer-events-none z-50 border border-white/20"
      >
        VIEW
      </div>

      {/* 🔥 Heading */}
      <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 py-10">
        <div>
          <p className="tracking-[0.3em] text-text text-sm">MY PROJECTS</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Stacked Interactive <br />
            <span className="text-red-500">Project Showcase</span>
          </h1>
        </div>
      </div>

      {/* 🚀 Slider */}
      <div ref={sliderRef} className="flex md:h-screen items-center ">
        {pro.slice(3, 8).map((p, i) => {
          const y = i * 4;
          return (
            <div
              key={p._id}
              className="panel w-screen flex justify-center items-center md:px-0 "
            >
              <div
                style={{
                  transform: `translateX(${y}px)`,
                }}
                className="relative group max-w-6xl w-full "
                onMouseMove={handleMove}
                onMouseLeave={resetTilt}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[550px] object-cover rounded-3xl "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition rounded-3xl " />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition text-white">
                  <h2 className="text-5xl font-bold">{p.title}</h2>
                  <p className="text-text/70 text-sm mt-2 max-w-md">
                    {p.disc}
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate(`/projects/${p._id}`)}
                className="absolute left-5 top-5 /* mobile default */ sm:left-10 sm:top-5 md:right-40 md:bottom-10 md:left-auto md:top-auto group cursor-pointer border border-white px-6 py-2 rounded-full  text-text flex items-center gap-2 backdrop-blur-md bg-bg/10  hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 text-white"
              >
                <span>View More</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectComponent;
