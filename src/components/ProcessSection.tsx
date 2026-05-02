import { Map, Wrench, Link, RefreshCw } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  { icon: Map, num: "01", title: "Mapeamento", desc: "Entendemos sua operação, processos e gargalos" },
  { icon: Wrench, num: "02", title: "Construção do sistema", desc: "Estruturamos sua empresa dentro do sistema" },
  { icon: Link, num: "03", title: "Integração de dados", desc: "Conectamos áreas e criamos dashboards inteligentes" },
  { icon: RefreshCw, num: "04", title: "Otimização contínua", desc: "Ajustamos o sistema para gerar crescimento previsível" },
];

const ProcessSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="processo" className="bg-fluxor-gray-light py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-fluxor-graphite tracking-tight">
            Como funciona
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Um processo claro e comprovado.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-fluxor-gray-medium" />

          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`relative text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-fluxor-white border-2 border-fluxor-gray-medium flex items-center justify-center mx-auto mb-5 relative z-10">
                <s.icon size={20} className="text-fluxor-blue-deep" />
              </div>
              <span className="text-xs font-mono text-fluxor-blue-vibrant tracking-widest">{s.num}</span>
              <h3 className="text-lg font-semibold text-fluxor-graphite mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
