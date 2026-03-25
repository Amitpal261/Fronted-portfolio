import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactComponent from "../components/ContactComponent";

const About = () => {
  const sectionRef = useRef(null);
  const revealRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      revealRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            delay: i * 0.08,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          },
        );
      });

      // Parallax images
      gsap.to(".parallax-img", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bg text-text px-6 md:px-20 pt-24 py-4 space-y-32 overflow-hidden font-mono"
    >
      {/* 🔥 HERO ABOUT */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1
            ref={addToRefs}
            className="text-5xl md:text-7xl font-bold leading-tight font-sans"
          >
            Crafting Digital <br />
            <span className="text-secondary">Experiences</span>
          </h1>

          <p
            ref={addToRefs}
            className="mt-6 text-text/70 text-lg leading-relaxed"
          >
            I started my journey in class 11th exploring Python and SQL, where I
            built a strong foundation in programming and logic building. Over
            time, I transitioned into full-stack development and now specialize
            in building scalable, modern web applications using the MERN stack.
          </p>

          <p ref={addToRefs} className="mt-4 text-text/60 leading-relaxed">
            I focus on creating smooth user experiences, clean UI design, and
            performance-driven applications. My passion lies in blending
            development with animation to deliver visually engaging digital
            products.
          </p>
        </div>

        {/* 🖼️ IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="developer"
            className="rounded-2xl shadow-2xl parallax-img"
          />
        </div>
      </div>

      {/* 🚀 EXPERIENCE */}
      <div>
        <h2
          ref={addToRefs}
          className="text-4xl md:text-5xl font-semibold mb-10"
        >
          Experience
        </h2>

        <div className="space-y-10">
          <div
            ref={addToRefs}
            className="p-6 rounded-2xl bg-bg/5 backdrop-blur-md border border-text bg-primary/20"
          >
            <h3 className="text-xl font-semibold">
              Freelance MERN Stack Developer
            </h3>
            <p className="text-text/60 text-sm">2024 - Present</p>
            <p className="text-text/70 mt-3">
              Building full-stack applications with MongoDB, Express, React, and
              Node.js. Focused on performance, scalability, and modern UI/UX
              design using Tailwind CSS and GSAP animations.
            </p>
          </div>

          <div
            ref={addToRefs}
            className="p-6 rounded-2xl bg-bg/5 backdrop-blur-md border  border-text bg-primary/20"
          >
            <h3 className="text-xl font-semibold">
              Self-Driven Project Developer
            </h3>
            <p className="text-text/60 text-sm">2023 - 2024</p>
            <p className="text-text/70 mt-3">
              Developed multiple projects including e-commerce platforms,
              interactive UI animations, and games. Strengthened problem-solving
              skills and gained hands-on experience in real-world development.
            </p>
          </div>
        </div>
      </div>

      {/* 🎓 EDUCATION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            ref={addToRefs}
            className="text-4xl md:text-5xl font-semibold mb-8"
          >
            Education
          </h2>
          <div
            ref={addToRefs}
            className="p-6 rounded-2xl bg-bg/5 border border-text bg-primary/20 my-10"
          >
            <h3 className="text-xl font-semibold">
              12th Grade – Science Stream
            </h3>
            <p className="text-text/60">Computer Science</p>
            <p className="text-text/70 mt-3">
              Completed in 2024 with a focus on computer science fundamentals.
              Gained hands-on experience in <strong>Python</strong> and{" "}
              <strong>SQL</strong>, building a strong foundation for programming
              and data management.
            </p>
          </div>
          <div
            ref={addToRefs}
            className="p-6 rounded-2xl bg-bg/5 border border-text bg-primary/20"
          >
            <h3 className="text-xl font-semibold">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-text/60">IGNOU</p>
            <p className="text-text/70 mt-3">
              Focused on software engineering, databases, and web technologies.
              Built strong fundamentals in programming, algorithms, and system
              design.
            </p>
          </div>
        </div>

        {/* 🖼️ IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="workspace"
          className="rounded-2xl shadow-xl parallax-img mt-10 md:p-0"
        />
      </div>

      {/* 🧠 SKILLS */}
      <div>
        <h2
          ref={addToRefs}
          className="text-4xl md:text-5xl font-semibold mb-10"
        >
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "JavaScript",
            "Tailwind CSS",
            "GSAP",
            "REST APIs",
          ].map((skill, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="p-5 rounded-xl text-center bg-gradient-to-br from-white/10 to-white/5 border border-text bg-primary/20 hover:scale-105 hover:bg-primary hover:text-text transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
