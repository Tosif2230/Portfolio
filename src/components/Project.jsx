import React from "react";
import project1 from "../assets/YouTube_Clone.png";
import project2 from "../assets/Portfolio.png";
import project3 from "../assets/ShoppyGlobe.png";
import project4 from "../assets/Online_Library.png";
import project5 from "../assets/To-Do_App.png";
import project6 from "../assets/Weather_Forcast.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Project({ darkMode }) {
  const projects = [
    {
      id: 1,
      title: "YouTube-Clone",
      desc: "MERN Stack Project",
      image: project1,
      tags: ["MongoDB", "Express.js", "React", "Node.js"],
    },
    {
      id: 2,
      title: "Portfolio",
      desc: "Personal Portfolio Website",
      image: project2,
      tags: ["React", "NodeJS", "Framer_Motion", "Tailwind_CSS"],
    },
    {
      id: 3,
      title: "ShoppyGlobe",
      desc: "E-Commerce Website using Products API",
      image: project3,
      tags: ["React", "NodeJS", "MongoDB"],
    },
    {
      id: 4,
      title: "Online Library",
      desc: "Online library for book managment system",
      image: project4,
      tags: ["React", "NodeJS", "MongoDB"],
    },
    {
      id: 5,
      title: "To-Do Application",
      desc: "To-Do Application for daily tasks.",
      image: project5,
      tags: ["React", "NodeJS"],
    },
    {
      id: 6,
      title: "Weather Application",
      desc: "Weather Forcast Website",
      image: project6,
      tags: ["HTML", "Tailwind_CSS", "JavaScript"],
    },
  ];
  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 " data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316,#f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A showcase of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "e5e7eb",
              }}
              className="group rounded-xl border duration-300 hover:border-orange-500/50 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: darkMode ? "white" : "#1f2937",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href="#"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex flex-1 items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                  {/* Demo */}
                  <a
                    href="#"
                    style={{
                      background: "linear-gradient(to right, #f93716,#f59e0b)",
                    }}
                    className="flex flex-1 items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            style={{
              background: "linear-gradient(to right, #f93716,#f59e0b)",
            }}
            className="inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub className="text-sm" />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
