function About() {
  return (
    <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/images/about.jpg"
          alt="About"
          className="rounded-lg shadow-lg"
        />

        <div>
          <p className="text-gray-600 mb-4">
            I'm Mohammed Tosif, an aspiring Full Stack Developer with
            hands-on experience in modern web technologies.
          </p>

          <p className="text-gray-600 mb-6">
            Skilled in HTML, CSS, JavaScript, Python, and React.
          </p>

          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
