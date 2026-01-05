function SkillBar({ name, level }) {
  return (
    <div>
      <p className="font-medium mb-1">{name}</p>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <SkillBar name="HTML" level="80%" />
        <SkillBar name="CSS" level="70%" />
        <SkillBar name="JS" level="70%" />
        <SkillBar name="React" level="70%" />
        <SkillBar name="NodeJS" level="70%" />
        <SkillBar name="ExpressJS" level="70%" />
        <SkillBar name="MongoDB" level="70%" />
      </div>
    </section>
  );
}

export default Skills;
