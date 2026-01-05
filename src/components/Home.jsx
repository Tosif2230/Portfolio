function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50 px-4"
    >
      <h1 className="text-4xl md:text-5xl font-bold">
        I'm <span className="text-blue-600">Mohammed Tosif</span>
      </h1>

      <p className="mt-2 text-lg text-gray-600">
        Full Stack Web Developer
      </p>

      <img
        src="/images/profile.png"
        alt="Profile"
        className="w-40 h-40 rounded-full mt-6 shadow-lg"
      />

      <div className="flex gap-6 mt-6 text-2xl">
        <a href="https://github.com/Tosif2230" target="_blank" rel="noreferrer">
          <i className="fab fa-github hover:text-blue-600"></i>
        </a>
        <a href="https://www.linkedin.com/in/mohammed-tosif/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin hover:text-blue-600"></i>
        </a>
      </div>

      <a
        href="/images/Mohammed_Tosif.pdf"
        download
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
      >
        Download CV
      </a>
    </section>
  );
}

export default Home;
