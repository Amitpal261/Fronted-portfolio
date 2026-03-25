import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiFacebook, SiGithub, SiGmail, SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import axios from "axios";

const API_URL = "https://portfolio-backend-0r3g.onrender.com/api/contact";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    disc: "",
  });
 
  const [loading, setLoading] = useState(false);

  console.log("from :", form);

  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await axios.post(API_URL, form);

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      service: "",
      disc: "",
    });

  } catch (err) {
    alert(err.response?.data?.message || "Failed");
  } finally {
    setLoading(false);
  }
};
  return (
    <div
      ref={containerRef}
      className="bg-bg text-text min-h-screen px-6 md:px-20 py-20"
    >
      {/* 🔥 Heading */}
      <div className="text-center mb-16 fade-up">
        <p className="tracking-[0.3em] text-text/60 text-sm">CONTACT</p>

        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          Let’s Build Something <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Incredible Together
          </span>
        </h1>
      </div>

      {/* 🔥 Top Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Image */}
        <div className="fade-up relative group">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="rounded-3xl w-full h-[350px] object-cover"
          />

          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* Info */}
        <div className="fade-up space-y-6">
          <h2 className="text-2xl font-semibold">Information</h2>

          <div>
            <p className="text-text/60 text-sm">Address</p>
            <p>India (Remote) 🌍</p>
          </div>

          <div>
            <p className="text-text/60 text-sm">Email</p>
            <p>yourmail@gmail.com</p>
          </div>

          <div>
            <p className="text-text/60 text-sm">Phone</p>
            <p>+91 XXXXX XXXXX</p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            {[
              <FaWhatsapp />,
              <SiInstagram />,
              <SiGmail />,
              <FaLinkedinIn />,
              <FaGithub />,
            ].map((s, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-text bg-text text-bg hover:bg-bg hover:text-text hover:border-none transition cursor-pointer text-3xl overflow-hidden"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 FORM */}
      <div className="max-w-3xl mx-auto fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className=" text-gray-400 bg-transparent from-text via-secondary to-text w-full px-5 py-3 backdrop-blur-xl rounded-full flex items-center justify-center border border-text"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className=" text-gray-400 bg-transparent from-text via-secondary to-text w-full px-5 py-3 backdrop-blur-xl rounded-full flex items-center justify-center border border-text"
          />

          {/* Select */}
          <select
          name="service"
            value={form.service}
            onChange={handleChange}
            className=" text-gray-400 bg-transparent from-text via-secondary to-text w-full px-5 py-3 backdrop-blur-xl rounded-full flex items-center justify-center border border-text"
          >
            <option className="bg-bg text-text">
              What service do you need?
            </option>
            <option className="bg-bg text-text">Frontend Development</option>
            <option className="bg-bg text-text">Full Stack (MERN)</option>
            <option className="bg-bg text-text">UI/UX Design</option>
          </select>

          {/* Textarea */}
          <textarea
          name="disc"
            value={form.disc}
            onChange={handleChange}
            placeholder="Project description..."
            rows="4"
            className=" text-text bg-transparent from-text via-secondary to-text w-full px-5 py-3 backdrop-blur-xl rounded-lg flex items-center justify-center border border-text "
          ></textarea>

          {/* Button */}
          <button type="submit" className="w-full py-3 rounded-full bg-primary text-text font-semibold hover:scale-105 transition flex items-center justify-center gap-2 hover:text-text">
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
