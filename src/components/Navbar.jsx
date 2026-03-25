import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { ButtonHover } from "../animation/animation";
import { MdMenu } from "react-icons/md";
import { FaMoon, FaRegSun, FaSun, FaWater } from "react-icons/fa";
import { SiSplunk, SiSuno, SiSunrise } from "react-icons/si";
import { BsSunset } from "react-icons/bs";

const Navbar = ({ setTheme }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const navRef = useRef();
  const lastScroll = useRef(0);

  useEffect(() => {
    ButtonHover();
  }, []);

  // GSAP animation
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.1, ease: "power4.out" }
      );

      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          delay: 0.1,
        }
      );
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 80) {
        gsap.to(navRef.current, { y: -120, duration: 0.2, ease: "power2.out" });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.2, ease: "power2.out" });
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  const menuItems = ["home", "about", "projects", "contact"];

  return (
    <div
      ref={navRef}
      className="flex justify-between px-6 md:px-20 items-center py-4 font-mono z-50 fixed w-full bg-bg/5 backdrop-blur-xl"
    >
      {/* Logo */}
      <img
        className="w-9 rounded-full"
        src="https://plus.unsplash.com/premium_photo-1668902223932-672a0dfbc21b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="logo"
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 items-center">
        {menuItems.map((item, i) => (
          <NavLink key={i} to={`/${item}`} className="flip-link">
            <span className="text top capitalize">{item}</span>
            <span className="text bottom capitalize">{item}</span>
          </NavLink>
        ))}

        {/* Hire Me */}
        <NavLink
          to="/projects"
          className="bg-bg text-text px-5 py-1 rounded-full font-bold"
        >
          HIRE ME
        </NavLink>

        {/* Theme Buttons */}
        <div className="flex gap-4 ml-5">
          <button
            className="p-2 rounded-full hover:bg-primary hover:text-bg transition"
            onClick={() => setTheme("theme-light")}
            title="Light Theme"
          >
            <FaSun />
          </button>
          <button
            className="p-2 rounded-full hover:bg-secondary hover:text-bg transition"
            onClick={() => setTheme("theme-dark")}
            title="Dark Theme"
          >
            <FaMoon />
          </button>
          <button
            className="p-2 rounded-full hover:bg-primary hover:text-bg transition"
            onClick={() => setTheme("theme-ocean")}
            title="Ocean Theme"
          >
            <FaWater />
          </button>
          <button
            className="p-2 rounded-full hover:bg-secondary hover:text-bg transition"
            onClick={() => setTheme("theme-sunset")}
            title="Sunset Theme"
          >
            <BsSunset />
          </button>
        </div>
      </div>

      {/* 🍔 Hamburger */}
      <div
        className="md:hidden flex flex-col gap-1 cursor-pointer text-primary text-2xl"
        onClick={() => setOpen(!open)}
      >
        <MdMenu />
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-screen bg-bg backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-2xl"
        >
          <button
            className="fixed right-10 top-7 hover:bg-bg hover:text-text rounded-full backdrop-blur-2"
            onClick={() => setOpen(false)}
          >
            X
          </button>

          {menuItems.map((item, i) => (
            <NavLink
              key={i}
              to={`/${item}`}
              ref={addToRefs}
              onClick={() => setOpen(false)}
              className="hover:text-text/60 transition"
            >
              {item.toUpperCase()}
            </NavLink>
          ))}

          <NavLink
            to="/projects"
            onClick={() => setOpen(false)}
            className="bg-bg text-text px-6 py-2 rounded-full font-bold"
          >
            HIRE
          </NavLink>

          {/* Theme Buttons in Mobile Menu */}
          <div className="flex gap-4 mt-10">
            <button
              className="p-2 rounded-full hover:bg-primary hover:text-bg transition"
              onClick={() => setTheme("theme-light")}
              title="Light Theme"
            >
              <FaSun />
            </button>
            <button
              className="p-2 rounded-full hover:bg-secondary hover:text-bg transition"
              onClick={() => setTheme("theme-dark")}
              title="Dark Theme"
            >
              <FaMoon />
            </button>
            <button
              className="p-2 rounded-full hover:bg-primary hover:text-bg transition"
              onClick={() => setTheme("theme-ocean")}
              title="Ocean Theme"
            >
              <FaWater />
            </button>
            <button
              className="p-2 rounded-full hover:bg-secondary hover:text-bg transition"
              onClick={() => setTheme("theme-sunset")}
              title="Sunset Theme"
            >
              <FaRegSun />
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;