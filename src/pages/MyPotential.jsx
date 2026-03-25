import React, { useState } from "react";
import { ServiceData } from "../utils/ServiceData.js";
import { FaArrowRight } from "react-icons/fa";

const MyPotential = () => {
  const mid = Math.ceil(ServiceData.length / 2);
  const left = ServiceData.slice(0, mid);
  const right = ServiceData.slice(mid);

  const [hover, setHover] = useState(null);

  const renderItem = (v, index, uniqueIndex) => {
    const isActive = hover === uniqueIndex;

    return (
      <div
        key={uniqueIndex}
        onMouseEnter={() => setHover(uniqueIndex)}
        onMouseLeave={() => setHover(null)}
        className="group border-b bg-text/70 pb-4 cursor-pointer transition-all duration-300"
      >
        {/* TOP ROW */}
        <div className="flex items-center justify-between">
          <p
            className={`text-xl md:text-2xl font-mono transition-all duration-300 ${
              isActive ? "text-text translate-x-1" : ""
            }`}
          >
            {v.title}
          </p>

          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 ${
              isActive
                ? "bg-primary border-primary rotate-45 scale-110"
                : "border-gray-600"
            }`}
          >
            <FaArrowRight className="transition-all duration-300" />
          </div>
        </div>

        {/* DESCRIPTION (SMOOTH EXPAND) */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isActive ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-text/60 text-sm leading-relaxed">
            {v.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-6 md:px-20 py-16 text-text bg-bg">
      {/* 🔥 Heading */}
      <div className="text-center mb-16">
        <p className="text-md tracking-widest text-text/60">
          MY POTENTIAL
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
          Crafting scalable,
          <br />
          <span className="text-secondary">
            high-performance web solutions
          </span>
        </h1>
      </div>

      {/* 🚀 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* LEFT */}
        <div className="space-y-8">
          {left.map((v, i) => renderItem(v, i, i))}
        </div>

        {/* RIGHT */}
        <div className="space-y-8">
          {right.map((v, i) => renderItem(v, i, i + mid))}
        </div>

      </div>
      <div className="pt-10 h-10/12">
        <img className=" h-150 border-r-2 border-white rounded-3xl" src="assets\BestProfile.png" alt="MyImage" />
      </div>
    </div>
  );
};

export default MyPotential;