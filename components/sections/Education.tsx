import Image from "next/image";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-16 border-t border-zinc-100 bg-white py-16"
    >
      <h2 className="mb-10 text-3xl font-bold text-yape-purple">Formación</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-yape-purple/30 hover:shadow-md">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
              <Image
                src="/ucv-logo.jpg"
                alt="Logo UCV"
                fill
                className="object-contain p-1"
              />
            </div>

            <div>
              <h3 className="font-bold text-zinc-900">
                Ingeniería de Sistemas
              </h3>
              <p className="text-sm font-medium text-yape-purple">
                Universidad César Vallejo
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600">
            En curso. Enfocada en arquitectura de software, algoritmos y
            desarrollo web moderno.
          </p>
        </div>

        <div className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-yape-purple/30 hover:shadow-md">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
              <Image
                src="/unicef-logo.png"
                alt="Logo UNICEF"
                fill
                className="object-contain p-1"
              />
            </div>

            <div>
              <h3 className="font-bold text-zinc-900">Programa +Chicas Tec</h3>
              <p className="text-sm font-medium text-yape-purple">UNICEF</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600">
            Participación en programas de impacto social, liderazgo femenino y
            tecnología.
          </p>
        </div>

        <div className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-yape-purple/30 hover:shadow-md">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
              <Image
                src="/icpna-logo.png"
                alt="Logo ICPNA"
                fill
                className="object-contain p-1"
              />
            </div>

            <div>
              <h3 className="font-bold text-zinc-900">Inglés Intermedio B2</h3>
              <p className="text-sm font-medium text-yape-purple">ICPNA</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-zinc-600">
            Capacidad para lectura técnica y comunicación fluida en contextos
            académicos y tecnológicos.
          </p>
        </div>
      </div>
    </section>
  );
}
