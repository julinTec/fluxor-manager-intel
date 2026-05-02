import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const FinalCTASection = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="cta" className="bg-fluxor-blue-deep py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fluxor-white tracking-tight leading-tight">
            Se sua empresa quer crescer com inteligência,
            <br />
            <span className="text-fluxor-blue-vibrant">a Fluxor é o próximo passo.</span>
          </h2>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 mt-10 bg-fluxor-blue-vibrant hover:bg-fluxor-blue-vibrant/90 text-fluxor-white font-medium px-10 py-4 rounded-md transition-all hover:gap-3 text-lg"
          >
            Falar com especialista
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
