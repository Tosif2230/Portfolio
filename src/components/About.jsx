import React from "react";
import about from "../assets/Tosif-About.png";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6`}
    >
      <div className="max-w-8xl w-full items-center grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 pb-4 py-18">
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-75 h-75 lg:w-96 lg:h-96">
            {/* Image */}
            <div
              className="absolute -inset-6 lg:-inset-20 bg-linear-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b] rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>
            <img
              src={about}
              alt="About Image"
              className="absolute -inset-5 w-full h-full object-cover z-10 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-5 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>
          <p
            className={`text-sm sm:text-base lg:text-lg xl-text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-3 sm:p-5 rounded-xl sm:rounded-2xl backdrop-blur-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I’m a Full Stack Developer specializing in the MERN stack, with
            hands-on experience in Next.js, Firebase, and internationalization
            using i18next. I build fast, scalable, and production-ready web
            applications with features like server-side rendering, real-time
            data handling, and multi-language support. With a background in
            Mechanical Engineering, I bring a structured and problem-solving
            approach to development. I enjoy taking ownership of features
            end-to-end — from designing user interfaces to implementing backend
            logic and deploying reliable solutions. I’m currently looking to
            join a product-focused company where I can contribute to real-world
            applications, move fast, and continue growing as a developer.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Projects Completed */}
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400">
                25+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Projects Completed
              </div>
            </div>
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400">
                Hands-on
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Web Development Experience
              </div>
            </div>
            {/* Years Experience */}
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400">
                6+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Years in Mechanical Engineering
              </div>
            </div>
          </div>
          <button
            className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform ${
              darkMode
                ? "text-white bg-orange-500/10"
                : "text-gray-800 bg-white/90"
            }`}
            data-aos="fade-up"
            data-aos-delay="750"
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
