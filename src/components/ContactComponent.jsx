import React from "react";

const ContactComponent = (props) => {
  return (
    <div
      className="w-full h-90 py-10 relative flex items-center justify-center px-6 md:px-20 mt-4 md:min-h-screen "
      style={{
        backgroundImage: "url('/assets/background.png')",
        backgroundPosition: "center",
        backgroundRepeat : "no-repeat",
        padding : "40px"
      }}
    >
      {/* 🔥 Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-black/60 to-black/30"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 w-full max-w-5xl text-text grid md:grid-cols-1 gap-12 items-center text-white">
        
        {/* LEFT SIDE */}
        <div>
          <p className="tracking-widest text-text/60 mb-4">
            CONTACT ME
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Let’s Build <br />
            <span className="text-secondary">Something Amazing</span>
          </h1>

          <p className="text-text/70 mt-6 leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let’s connect and create
            something impactful together.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8">
            <button className={`px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition`}>
              Hire Me
            </button>
            <button className={`px-6 py-3 border border-${props.color} text-white rounded-full hover:bg-white hover:text-black transition hover:translate-x-1`}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;