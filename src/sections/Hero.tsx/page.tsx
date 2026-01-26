import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-3 lg:px-8">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-1xl">
            <div className="max-w-lg">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
                Genesis Sumaran
                <br />
                <span className="text-yape-purple">
                  Aprendiz de Next
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Estudiante de{" "}
                <span className="font-semibold text-yape-mint">
                  Ingeniería de Sistemas
                </span>{" "}
                de sexto ciclo, con habilidades en Java y aprendiendo entornos
                en Next y Tailwind
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/cvgenesissumaran.pdf"
                  download
                  className="rounded-full bg-yape-purple px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90  focus-visible:outline-offset-2 focus-visible:outline-yape-purple transition-all duration-300 hover:scale-105"
                >
                  Descargar CV
                </a>
                <a
                  href="https://github.com/genesissumaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold leading-6 text-zinc-900 hover:text-yape-purple flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Ver GitHub →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-full">
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-tr from-yape-purple to-yape-mint opacity-20 blur-3xl rounded-full" />

            <div className="relative aspect-4/5 w-full max-w-sm rounded-2xl shadow-xl ring-4 ring-white overflow-hidden bg-zinc-100 mx-auto lg:mr-0">
              <Image
                src="/perfil.jpg"
                alt="Génesis Sumaran"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
