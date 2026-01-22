import Link from "next/link";

const Navbar = () => {
  const navigation = [
    { name: "Experiencia", href: "#experience" },
    { name: "Formación", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
  ];

  return (
    <header className="bg-yape-purple sticky top-0 z-50 shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold text-white">
            Genesis<span className="text-yape-mint">.Dev</span>
          </Link>
        </div>
        <div className="flex gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-yape-mint transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          <a
            href="mailto:genesissumaran@yape.com.pe"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-yape-purple shadow-sm hover:bg-yape-mint hover:text-white transition-all duration-300"
          >
            ¡Envíame un correo!
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
