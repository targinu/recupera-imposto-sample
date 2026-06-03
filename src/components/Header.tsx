"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      onClick={(e) => { const a = (e.target as HTMLElement).closest("a"); if (a) e.preventDefault(); }}
      className={`
        w-full sticky top-0 z-50 bg-brand5 shadow-md
        transition-all duration-300
        ${scrolled ? "py-1" : "py-2"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between transition-all duration-300">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/images/logo/logo-principal.webp"
              alt="Logo Recupera Imposto"
              className={`
                transition-all duration-300
                ${scrolled ? "h-12" : "h-20"}
              `}
            />
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-4 max-[1200px]:gap-3 text-base max-[1200px]:text-sm font-medium transition-all text-brand2">
            <a
              href="/#sobre"
              className="hover:text-brand6 transition whitespace-nowrap"
            >
              Quem somos
            </a>
            <a
              href="/#solucoes"
              className="hover:text-brand6 transition whitespace-nowrap"
            >
              Soluções
            </a>
            <a
              href="/#patologias"
              className="hover:text-brand6 transition whitespace-nowrap"
            >
              Quem tem direito
            </a>
            <a
              href="/#faq"
              className="hover:text-brand6 transition whitespace-nowrap"
            >
              Dúvidas frequentes
            </a>
            <a
              href="/blog/"
              className="hover:text-brand6 transition whitespace-nowrap"
            >
              Blog
            </a>
            <a
              href="/area-do-cliente/"
              className="px-3 py-1.5 rounded-md border border-brand6 text-brand6 hover:bg-brand6 hover:text-brand5 transition-all duration-200 whitespace-nowrap"
            >
              Área do cliente
            </a>
            <a
              href="/assistente-virtual/"
              className="px-3 py-2 rounded-md border border-brand3 bg-brand3 text-black font-medium shadow-sm
          + hover:opacity-85 hover:shadow-md transition-all duration-200"
            >
              Fale com um consultor
            </a>
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-brand6"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={34} /> : <Menu size={34} />}
          </button>
        </nav>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-brand5 border-t border-brand6/30 shadow-lg">
          <div className="flex flex-col px-6 py-4 text-lg font-medium gap-4">
            <a
              href="/#sobre"
              onClick={() => setOpen(false)}
              className="hover:text-brand6"
            >
              Quem somos
            </a>
            <a
              href="/#solucoes"
              onClick={() => setOpen(false)}
              className="hover:text-brand6"
            >
              Soluções
            </a>
            <a
              href="/#patologias"
              onClick={() => setOpen(false)}
              className="hover:text-brand6"
            >
              Quem tem direito
            </a>
            <a
              href="/#faq"
              onClick={() => setOpen(false)}
              className="hover:text-brand6"
            >
              Dúvidas frequentes
            </a>
            <a
              href="/blog/"
              onClick={() => setOpen(false)}
              className="hover:text-brand6"
            >
              Blog
            </a>
            <a
              href="/area-do-cliente/"
              onClick={() => setOpen(false)}
              className="mt-2 px-3 py-2 rounded-md border border-brand6 text-brand6 hover:bg-brand6 hover:text-brand5 transition-all duration-200"
            >
              Área do cliente
            </a>
            <a
              href="/assistente-virtual/"
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-md border border-black bg-brand3 text-black font-medium shadow-sm hover:opacity-85 hover:shadow-md transition-all duration-200"
            >
              Fale com um consultor
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
