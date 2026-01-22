export default function Skills() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Git / GitHub",
    "Inglés B2",
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
  ];

  return (
    <section
      id="skills"
      className="py-16 scroll-mt-16 border-t border-slate-100"
    >
      <h2 className="mb-6 text-2xl font-bold text-slate-900">Habilidades</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="cursor-default rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 hover:text-slate-900"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
