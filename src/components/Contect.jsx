function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <form className="max-w-xl mx-auto space-y-4">
        <input className="w-full p-3 border rounded" placeholder="Name" />
        <input className="w-full p-3 border rounded" placeholder="Email" />
        <textarea className="w-full p-3 border rounded" placeholder="Message" />
        <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
