import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactComponent from "./components/ContactComponent";
import Footer from "./components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import  { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";


function App() {
    const [theme, setTheme] = useState("theme-dark");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function ScrollFix() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [location]);

  return null;
}

 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  });

  return () => ctx.revert(); // ✅ SAFE cleanup
}, []);

  return (
    <div className={`${theme} transition-colors duration-500 min-h-screen bg-bg`}>
      {/* Cursor */}
     

      {/* Navbar */}
      <Navbar setTheme={setTheme}  />

      {/* Pages */}
      <div className="pt-20">
        <Outlet />
      </div>

      {/* Sections */}
      <div className="reveal">
        <ContactComponent color="white" />
      </div>

      <div className="reveal">
        <Footer />
      </div>

    </div>
  );
}

export default App;