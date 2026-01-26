import Image from "next/image";
export default function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-16">
      <h2 className="mb-8 text-2xl font-bold text-slate-900">
        Experiencia Laboral
      </h2>

      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="relative h-14 w-14 shrink-0 rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
            <Image
              src="/yape-logo.jpg"
              alt="Logo de Yape"
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <h3 className="text-xl font-bold text-slate-900">
                Asistente Yape
              </h3>
              <span className="mt-1 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 sm:mt-0">
                Presente
              </span>
            </div>

            <p className="text-indigo-600 font-medium">Yape (BCP)</p>

            <ul className="mt-4 space-y-2 text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600"></span>
                <span>Desarrollo de sitios web.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600"></span>
                <span>Colaboración en equipo.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
