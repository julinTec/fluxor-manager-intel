import { Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const SimulationSection = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="bg-fluxor-gray-light py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`max-w-2xl mx-auto text-center bg-fluxor-white rounded-2xl border border-fluxor-gray-medium/50 p-12 md:p-16 shadow-sm transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="w-14 h-14 rounded-full bg-fluxor-blue-vibrant/10 flex items-center justify-center mx-auto mb-6">
            <Sparkles size={24} className="text-fluxor-blue-vibrant" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-fluxor-graphite tracking-tight">
            Descubra o potencial de crescimento da sua empresa
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nossa ferramenta analisa seu cenário e projeta oportunidades reais de escala.
          </p>
          <button className="mt-8 bg-fluxor-blue-vibrant hover:bg-fluxor-blue-vibrant/90 text-fluxor-white font-medium px-8 py-4 rounded-md transition-colors text-base">
            Simular crescimento
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;
