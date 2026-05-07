import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom,rgba(0,0,0,0.55),rgba(17,24,39,0.55))"
          : "linear-gradient(to bottom,rgba(243,244,246,0.85),rgba(229,231,235,0.85))",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="brand-font text-2xl font-bold mb-2 text-[#39ff14] dark:text-white">
              Portfolio<span className="text-[#39ff14]">.</span>
            </h3>
            <p
              className="text-sm"
              style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}
            >
              Full Stack MERN Developer
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Tosif2230" target="_blank"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-[#39ff14] hover:to-[#b7ff3c] hover:text-black bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-tosif/" target="_blank"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-[#39ff14] hover:to-[#b7ff3c] hover:text-black bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/TechieTosif" target="_blank"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-[#39ff14] hover:to-[#b7ff3c] hover:text-black bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]"
            >
              <FaXTwitter />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
              &#169;{currentYear} Made by
              <span className="mt-1 text-[#39ff14]">Mohammed Tosif</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
