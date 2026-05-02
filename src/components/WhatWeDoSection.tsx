import { ShoppingCart, DollarSign, Settings, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const blocks = [
  { icon: ShoppingCart, title: "Comercial", desc: "Pipeline estruturado e previsível" },
  { icon: DollarSign, title: "Financeiro", desc: "Controle total de receitas, custos e lucro" },
  { icon: Settings, title: "Operacional", desc: "Processos organizados e escaláveis" },
  { icon: BarChart3, title: "BI (Inteligência)", desc: "Dashboards com visão completa do negócio" },
];

const WhatWeDoSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="sobre" className="bg-fluxor-white py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-fluxor-graphite tracking-tight">
            O sistema que faz sua empresa funcionar com inteligência
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Criamos e implantamos um sistema sob medida para sua empresa operar com controle, previsibilidade e escala.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className={`group p-8 rounded-xl border border-fluxor-gray-medium/50 hover:border-fluxor-blue-vibrant/30 transition-all duration-500 hover:shadow-lg ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-fluxor-blue-deep/10 flex items-center justify-center mb-5">
                <b.icon size={22} className="text-fluxor-blue-deep" />
              </div>
              <h3 className="text-lg font-semibold text-fluxor-graphite mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
