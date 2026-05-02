import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-fluxor-black overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: "linear-gradient(hsl(var(--fluxor-gray-medium)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--fluxor-gray-medium)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      {/* Animated SVG chart */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 opacity-10 hidden lg:block">
        <svg viewBox="0 0 500 400" className="w-full h-full">
          <polyline
            points="0,380 80,340 160,300 240,250 300,180 360,120 420,60 500,20"
            fill="none"
            stroke="hsl(213, 83%, 56%)"
            strokeWidth="2"
            strokeDasharray="1000"
            className="animate-draw-line"
          />
          <polyline
            points="0,380 80,360 160,340 240,310 300,260 360,200 420,140 500,80"
            fill="none"
            stroke="hsl(213, 83%, 56%)"
            strokeWidth="1"
            strokeDasharray="1000"
            className="animate-draw-line"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-fluxor-white leading-tight tracking-tight animate-fade-up">
            Crescimento previsível para empresas que querem escalar.
          </h1>
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-fluxor-gray-medium leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Inteligência estratégica. Gestão eficiente. Resultados reais.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 mt-10 bg-fluxor-blue-vibrant hover:bg-fluxor-blue-vibrant/90 text-fluxor-white font-medium px-8 py-4 rounded-md transition-all hover:gap-3 text-base animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Quero escalar minha empresa
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
