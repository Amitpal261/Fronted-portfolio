import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { projects } from "../utils/ServiceData";
import { getProjects } from "../services/api.js";
import { FaArrowRight, FaLine } from "react-icons/fa";
import { FaLinode } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Projectss = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [projects, setProjects] = useState([]);
   const navigate = useNavigate();

  // ✅ Fetch API Data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);

        const data = await getProjects(token);
        console.log("Projects:", data);

        setProjects(data);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      // 🔥 SMOOTH STAGGER REVEAL
      gsap.from(cards, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // 🔥 IMAGE ZOOM PARALLAX (LIGHTWEIGHT)
      cards.forEach((card) => {
        const img = card.querySelector("img");

        gsap.fromTo(
          img,
          { scale: 1.2 },
          {
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          },
        );
      });

      // 🔥 CUSTOM CURSOR (SMOOTH)
      const moveCursor = (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX - 40,
          y: e.clientY - 40,
          duration: 0.2,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", moveCursor);

      return () => window.removeEventListener("mousemove", moveCursor);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#070707] text-text relative overflow-hidden bg-bg text-white"
    >
      {/* 🔥 CURSOR */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 bg-bg/10 backdrop-blur-2xl rounded-full flex items-center justify-center text-[5px] tracking-widest pointer-events-none z-50 border border-white/20 text-text"
      >
        VIEW
      </div>

      {/* 🔥 HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 pt-20 pb-10 text-text">
        <p className="tracking-[0.4em] text-text/50 text-xs uppercase">
          Portfolio
        </p>

        <h1 className="text-4xl md:text-7xl font-bold mt-6 leading-tight">
          Selected{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
            Projects
          </span>
        </h1>
      </div>

      {/* 🚀 PROJECTS */}
      <div className="flex flex-col gap-32 px-6 md:px-20 pb-40 max-w-7xl mx-auto">
        {projects.map((p) => (
          <div key={p._id} className="project-card group w-full relative">
            {/* CARD */}
            <div className="relative overflow-hidden rounded-[30px] border bg-primary/20 bg-bg/5 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)]">
              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition duration-500" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-6 md:p-10 transform translate-y-10 group-hover:translate-y-0 transition duration-500">
                <h2 className="text-3xl md:text-5xl font-semibold mb-3">
                  {p.title}
                </h2>
                <p className="text-text/70 text-sm md:text-base max-w-md leading-relaxed opacity-0 group-hover:opacity-100 transition duration-500 flex flex-wrap gap-2">
                  
                  {p.tech.map((v, i) => (
                    <span
                      key={i}
                      className="bg-text/10 text-text/80 px-2 py-1 rounded-full font-medium text-xs md:text-sm"
                    >
                      {"💠 " + v.toUpperCase()}
                    </span>
                  ))}
                </p>
              </div>

              {/* BUTTON */}
              <button onClick={() => navigate(`/projects/${p._id}`)} className="absolute top-6 right-6 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border border-white/20 bg-bg/10 backdrop-blur-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-white">
                View
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectss;
