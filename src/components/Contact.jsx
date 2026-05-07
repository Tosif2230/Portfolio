import React from "react";
const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-16 md:py-18 lg:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            Get In
            <span
              style={{
                background: "linear-gradient(to right,#39ff14,#b7ff3c)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            Let's discuss
          </p>
        </div>
        <div className="flex flex-cols-1 lg:flex-cols-2 gap-4 sm:gap-6 md:gap-8 justify-center items-center">
          <form
            style={{
              background: darkMode
                ? "linear-gradient(to right,#1f2937,#111827)"
                : "linear-gradient(to right,#ffffff,#f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4" >
              <input
                type="text"
                placeholder="First Name"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#f2fff0",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-[#39ff14] focus:ring-2 focus:ring-[#39ff14]/20 transition-all"
                required
              />
               <input
                type="text"
                placeholder="Last Name"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#f2fff0",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-[#39ff14] focus:ring-2 focus:ring-[#39ff14]/20 transition-all"
                required
              />
            </div>
            {/* Email Address */}
              <input
                type="email"
                placeholder="Mail Address"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#f2fff0",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-[#39ff14] focus:ring-2 focus:ring-[#39ff14]/20 transition-all mb-3 sm:mb-4"
                required
              />
              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#f2fff0",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-[#39ff14] focus:ring-2 focus:ring-[#39ff14]/20 transition-all mb-3 sm:mb-4"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#f2fff0",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-[#39ff14] focus:ring-2 focus:ring-[#39ff14]/20 transition-all mb-4 sm:mb-6 resize-none"
                required
              />
              <button
                type="submit"
                style={{
                  background: "linear-gradient(to right, #39ff14,#b7ff3c)",
                }}
                className="w-full py-2 sm:py-3 text-black font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-[#39ff14]/25 hover:scale-[1.02] transition-all"
              >
                Send Message
              </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
