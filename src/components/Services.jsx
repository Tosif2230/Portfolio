function Card({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <button className="text-blue-600 font-medium">View</button>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Portfolio Website" desc="React + Tailwind CSS" />
        <Card title="Money Distribution App" desc="Python based logic" />
        <Card title="Console Calculator" desc="Python project" />
      </div>
    </section>
  );
}

export default Services;
