import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SkillsSlider from "../components/SkillSilder";
import MyPotential from "./MyPotential";
import MovingBanner from "../components/MovingBanner";
import ProjectComponent from "../components/ProjectComponent";


function Home() {
  const titleRef = useRef([]);
  const contentRef = useRef();
  const imagesRef = useRef([]);

  const addTitleRef = (el) => {
    if (el && !titleRef.current.includes(el)) {
      titleRef.current.push(el);
    }
  };

  const addImageRef = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };
  useEffect(() => {
    // 👉 SET initial state manually
    gsap.set(titleRef.current, { y: 80, opacity: 0 });
    gsap.set(contentRef.current, { y: 40, opacity: 0 });
    gsap.set(imagesRef.current, { x: -50, opacity: 0, scale: 0.8 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // ✅ Now animate TO normal state
    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
    })
      .to(
        contentRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.6",
      )
      .to(
        imagesRef.current,
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
        },
        "-=0.5",
      );
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row px-6 py-16 gap-10 text-text font-mono">
        {/* Title */}
        <div className="md:w-1/2 w-full space-y-1 text-5xl font-bold leading-tight">
          <div ref={addTitleRef} className="overflow-hidden">
            <h1>Innovative and Driven </h1>
          </div>
          <div ref={addTitleRef} className="overflow-hidden text-secondary">
            <h1>Software Builder</h1>
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="md:w-1/2 w-full space-y-6 text-text/70"
        >
          <p>
              I build modern, scalable, and high-performance web applications
              using MongoDB, Express.js, React, and Node.js. Passionate about
              creating interactive UI and smooth user experiences with clean and
              efficient code.
          </p>

          {/* Images */}
          <div className="flex items-center -space-x-3">
            <img
              ref={addImageRef}
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              src="https://plus.unsplash.com/premium_photo-1764255300237-ffbac10e38f6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              ref={addImageRef}
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              src="https://images.unsplash.com/photo-1773751392399-241afcb9fac2?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              ref={addImageRef}
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
              src="https://plus.unsplash.com/premium_photo-1773830841671-37b43b9f847f?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <button className="w-12 h-12 rounded-full bg-primary text-text text-xl flex items-center justify-center z-30">
              +
            </button>
            <h5 className="px-5 text-text font-extralight">
              10+ Big Projects
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center overflow-hidden text-text">
        <div className="w-full max-w-6xl flex flex-col gap-10 px-6 py-0 ">
          {/* HERO SECTION */}
          <div className="w-full flex flex-col justify-between md:flex-row items-center overflow-hidden">
            <div
              className="w-full h-[420px] md:h-[500px] rounded-3xl border border-primary/20 bg-cover bg-center relative overflow-hidden flex items-center "
              ref={addTitleRef}
              style={{
                backgroundImage: ` url('assets//GradientFinal.jpg')
            `,
              }}
            >
              {/* 🔥 Overlay */}
              <div className="absolute inset-0 bg-bg/50 "></div>

              {/* 🖼️ Profile Image */}
              <img
                src="/assets/Profile.png"
                alt="profile"
                className="w-[600px] backdrop-blur-sm md:w-[600px] top-10 object-contain absolute bottom-0 left-6 md:left-12 drop-shadow-2xl z-10"
              />

              {/* 📄 Content */}
              <div className="relative z-10 ml-auto h-10 pt-20 mr-10 md:flex md:flex-col md:justify-center md:items-center md:h-auto max-w-md space-y-1 flex flex-col items-center md:space-y-10">
                <h1
                  className="text-3xl md:text-5xl font-bold leading-tight text-white"
                  ref={addTitleRef}
                >
                  Hi, I'm <span className="text-secondary">Amit Pal</span>
                </h1>

                <h2
                  className="text-lg md:text-2xl text-text/70 font-medium text-white"
                  ref={addTitleRef}
                >
                  MERN Stack Developer
                </h2>

                <div className="flex gap-4 pt-2" ref={addTitleRef}>
                  <button className="px-6 py-2 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
                    Hire Me
                  </button>
                  <button
                    ref={addTitleRef}
                    className="px-6 py-2 border text-white rounded-full hover:bg-primary hover:text-white transition"
                  >
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* DESCRIPTION SECTION */}
          <div className=" flex flex-col  space-y-6 content-center w-full justify-center font-mono ">
            <p className="text-text/70 leading-relaxed text-lg text- ">
I develop modern, scalable, and efficient web applications using MongoDB, Express.js, React, and Node.js. I am passionate about creating seamless user experiences and interactive interfaces, delivering clean, maintainable code that balances performance and usability.            </p>

            {/* SKILLS */}
          </div>
        </div>
      </div>
       <SkillsSlider/>
      <MyPotential/>
      <ProjectComponent/>
      <MovingBanner/>
    </div>
  );
}

export default Home;
