import { CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const audiences = [
  "Empresas que já faturam e querem escalar com previsibilidade",
  "Donos que perderam controle dos números",
  "Operações que cresceram sem estrutura",
  "Negócios que precisam integrar dados e decisões",
];

const TargetAudienceSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section className="bg-fluxor-gray-light py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-fluxor-graphite tracking-tight">
            Para quem a Fluxor é
          </h2>
        </div>

        <div className="space-y-4">
          {audiences.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 bg-fluxor-white rounded-xl border border-fluxor-gray-medium/50 p-5 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CheckCircle size={20} className="text-fluxor-blue-vibrant shrink-0" />
              <p className="text-base text-fluxor-graphite">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
