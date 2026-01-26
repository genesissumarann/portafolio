"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Experiencia", href: "#experience" },
  { name: "Formación", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMenu = () => setMobileMenuOpen(true);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-yape-purple shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-2xl font-bold text-white"
          >
            Genesis<span className="text-yape-mint">.Dev</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={openMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white transition-colors hover:text-yape-mint"
          >
            <span className="sr-only">Abrir menú principal</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-sm font-semibold leading-6 text-white transition-colors hover:text-yape-mint"
            >
              {name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="mailto:genesissumaran@yape.com.pe"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-yape-purple shadow-sm transition-all duration-300 hover:bg-yape-mint hover:text-white"
          >
            ¡Envíame un correo!
          </a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />

          <div className="fixed inset-y-0 right-0 z-50 w-72 overflow-y-auto bg-yape-purple px-6 py-6 shadow-2xl ring-1 ring-white/10 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5 text-2xl font-bold text-white"
              >
                Genesis<span className="text-yape-mint">.Dev</span>
              </Link>

              <button
                type="button"
                onClick={closeMenu}
                className="-m-2.5 rounded-md p-2.5 text-white transition-colors hover:text-yape-mint"
              >
                <span className="sr-only">Cerrar menú</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map(({ name, href }) => (
                    <a
                      key={name}
                      href={href}
                      onClick={closeMenu}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white transition-colors hover:bg-white/10 hover:text-yape-mint"
                    >
                      {name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  <a
                    href="mailto:genesissumaran@yape.com.pe"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white transition-colors hover:bg-white/10 hover:text-yape-mint"
                  >
                    ¡Envíame un correo!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
