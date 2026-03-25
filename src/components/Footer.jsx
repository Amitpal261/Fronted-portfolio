import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-20 text-text bg-bg">
      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 gap-10 md:gap-16">

        {/* Left Section */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
            <img
              src="https://plus.unsplash.com/premium_photo-1668902223932-672a0dfbc21b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-10 h-10 rounded-full object-cover"
              alt=""
            />
            <h1 className="text-xl font-semibold">MyPortfolio</h1>
          </div>

          <p className="text-text/60 leading-relaxed text-sm">
            Crafting scalable, high-performance web applications with modern
            technologies and seamless user experiences.
          </p>

          <div className="flex justify-center sm:justify-start gap-3 mt-6 flex-wrap">
            {[FaFacebook, FaInstagram, FaLinkedin, FaGithub, SiGmail].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center border bg-text/70 rounded-full hover:bg-primary hover:text-text transition cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-6 md:gap-8 justify-center">

          {[
            { name: "Home", path: "/home" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-800 pb-2 group cursor-pointer"
            >
              <NavLink to={item.path} className="flip-link flex items-center">
                <div className="relative h-6 overflow-hidden">
                  <span className="text top">{item.name}</span>
                  <span className="text bottom">{item.name}</span>
                </div>
              </NavLink>

              <FaArrowRight className="opacity-70 group-hover:rotate-45 transition duration-300" />
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 md:gap-8">
          {["GitHub", "LinkedIn", "Resume", "Coming Soon . . ."].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-800 pb-2 group cursor-pointer"
            >
              <span className="text-text/60 group-hover:text-text transition">
                {item}
              </span>
              <FaArrowRight className="opacity-70 group-hover:rotate-45 transition duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center text-text/60 text-sm px-6 md:px-10 gap-4">

        <p className="text-center md:text-left">
          © 2026 Amit Pal. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          <a href="#" className="hover:text-text transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-text transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-text transition">
            Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;