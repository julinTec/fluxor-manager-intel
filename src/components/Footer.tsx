const Footer = () => {
  return (
    <footer className="bg-fluxor-black border-t border-fluxor-graphite/50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-fluxor-white font-bold text-xl tracking-wider">FLUXOR</p>
            <p className="text-fluxor-gray-medium text-sm mt-1">Inteligência. Gestão. Crescimento.</p>
          </div>

          <div className="flex gap-8">
            {["Sobre", "Processo", "Resultados", "Contato"].map((l) => (
              <a
                key={l}
                href={`#${l === "Sobre" ? "sobre" : l === "Processo" ? "processo" : l === "Resultados" ? "resultados" : "cta"}`}
                className="text-fluxor-gray-medium hover:text-fluxor-white transition-colors text-sm"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-fluxor-graphite/30 text-center">
          <p className="text-fluxor-gray-medium/50 text-xs">
            © {new Date().getFullYear()} Fluxor. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
