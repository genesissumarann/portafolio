interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

const projectsData: Project[] = [
  {
    title: "Salud Predictiva",
    description:
      "Un proyecto desarrollado en Java y SQL para predecir brotes de enfermedades en el campus universitario. Cuenta con funciones para registrar pacientes/estudiantes, guardar turno, carrera, facultad y síntomas en un entorno intuitivo. Incluye la funcionalidad de exportar informes epidemiológicos en Excel y PDF, usando librerías de Java para mostrar gráficos actualizados que revelan el peligro epidemiológico por facultad.",
    technologies: [
      "Java",
      "SQL",
      "Librerías de Gráficos",
      "PDF Export",
      "Excel Export",
    ],
    githubLink: "https://github.com/genesisSumaran/SaludPredictiva",
  },
  {
    title: "Encriptador Web",
    description:
      "Página web hecha con HTML, CSS y JavaScript que permite a los usuarios encriptar y desencriptar mensajes de manera sencilla y segura. Utiliza un algoritmo de sustitución para transformar el texto ingresado, proporcionando una capa adicional de privacidad para la comunicación diaria.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/genesisSumaran/encriptador",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-yape-purple">
            Mi Portafolio
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Proyectos Destacados
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Como estudiante de Ingeniería de Sistemas, he aplicado mis
            conocimientos en el desarrollo de distintos proyectos
            universitarios, enfocándome en soluciones prácticas y funcionales.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {projectsData.map((project) => (
              <div
                key={project.title}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 hover:shadow-md transition-shadow duration-300"
              >
                <dt className="flex items-center gap-x-3 text-xl font-bold leading-7 text-zinc-900">
                  {project.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-zinc-600">
                  <p className="flex-auto mb-6">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-yape-mint/10 px-2.5 py-0.5 text-xs font-medium text-accent-dark ring-1 ring-inset ring-yape-mint/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold leading-6 text-yape-purple hover:text-yape-mint flex items-center gap-2 group transition-colors"
                    >
                      Ver código en GitHub{" "}
                      <span
                        aria-hidden="true"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        →
                      </span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
