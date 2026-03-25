import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { getProjectById } from "../services/api";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ensure dark theme by default
  useEffect(() => {
    document.body.classList.add("theme-dark");
  }, []);

  // Fetch project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  // GSAP animations
  useEffect(() => {
    if (!project) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".project-title", { y: 50, opacity: 0, duration: 0.8 });
      tl.from(".project-image", { opacity: 0, scale: 1.05, duration: 0.8 }, "-=0.5");
      tl.from(".project-desc", { y: 20, opacity: 0, duration: 0.6 }, "-=0.5");
      tl.from(".tech-pill", { opacity: 0, y: 10, stagger: 0.1, duration: 0.5 }, "-=0.4");
      tl.from(".links-btn", { opacity: 0, y: 15, stagger: 0.1, duration: 0.5 }, "-=0.4");
    }, containerRef);
    return () => ctx.revert();
  }, [project]);

  if (loading) return <p className="text-center mt-40 text-lg text-text/70">Loading...</p>;
  if (!project) return <p className="text-center mt-40 text-lg text-text/70">Project not found</p>;

  return (
    <div
      ref={containerRef}
      className="bg-bg text-text min-h-screen px-6 md:px-20 py-16"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 text-sm md:text-base font-medium hover:text-primary transition-colors"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Title */}
      <h1 className="project-title text-4xl md:text-6xl font-bold mb-6 ">
        {project.title}
      </h1>

      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md">
        <img
          src={project.image}
          alt={project.title}
          className="project-image w-full object-cover rounded-2xl max-h-[500px]"
        />
      </div>

      {/* Description */}
      <p className="project-desc text-text/70 text-base md:text-lg mb-6 leading-relaxed">
        {project.disc}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="tech-pill bg-card px-3 py-1 rounded-full text-sm font-medium text-text/80"
          >
            {t.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="links-btn flex items-center gap-2 px-5 py-2 rounded-full bg-card hover:bg-gray-800 transition-colors duration-300 text-text/90"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="links-btn flex items-center gap-2 px-5 py-2 rounded-full bg-primary hover:bg-secondary hover:text-black  transition-colors duration-300 text-white"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;