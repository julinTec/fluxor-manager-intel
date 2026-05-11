import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import fluxorLogo from "@/assets/fluxor-logo.png";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Processo", href: "#processo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#cta" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-fluxor-black/95 backdrop-blur-md border-b border-fluxor-graphite/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-24">
        <a href="#" className="flex items-center">
          <img
            src={fluxorLogo}
            alt="Fluxor — Inteligência, Gestão e Crescimento"
            className="h-16 w-auto object-contain brightness-0 invert"
          />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-fluxor-gray-medium hover:text-fluxor-white transition-colors text-sm tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="bg-fluxor-blue-vibrant hover:bg-fluxor-blue-vibrant/90 text-fluxor-white text-sm px-5 py-2.5 rounded-md transition-colors"
          >
            Falar com especialista
          </a>
        </div>

        <button
          className="md:hidden text-fluxor-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-fluxor-black/95 backdrop-blur-md border-t border-fluxor-graphite/50 px-6 pb-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-fluxor-gray-medium hover:text-fluxor-white transition-colors text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 text-center bg-fluxor-blue-vibrant text-fluxor-white text-sm px-5 py-2.5 rounded-md"
          >
            Falar com especialista
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
