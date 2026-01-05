function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <img
        src="/images/Mohammed_Tosif_logo.png"
        alt="logo"
        className="h-10"
      />

      <nav className="space-x-6 font-medium">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>

      <button className="text-xl">🌞/🌜</button>
    </header>
  );
}

export default Header;
