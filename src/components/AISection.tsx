import { Bot, Sparkles, TrendingUp } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const cards = [
  {
    icon: Bot,
    title: "Automação de tarefas",
    desc: "Rotinas manuais executadas automaticamente, sem retrabalho.",
  },
  {
    icon: Sparkles,
    title: "Insights inteligentes",
    desc: "A IA analisa seus dados e mostra oportunidades e riscos.",
  },
  {
    icon: TrendingUp,
    title: "Previsões e alertas",
    desc: "Antecipe quedas de venda, atrasos e desvios financeiros.",
  },
];

const AISection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section className="bg-fluxor-black py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--fluxor-gray-medium)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--fluxor-gray-medium)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-fluxor-blue-vibrant mb-4">
            Inteligência Artificial
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-fluxor-white tracking-tight">
            IA que trabalha junto com sua operação
          </h2>
          <p className="mt-4 text-fluxor-gray-medium text-lg">
            Automatizamos tarefas repetitivas, geramos insights em tempo real e antecipamos decisões — tudo dentro do seu sistema.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`p-8 rounded-xl border border-fluxor-white/10 bg-fluxor-graphite/40 backdrop-blur transition-all duration-700 hover:border-fluxor-blue-vibrant/40 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-fluxor-blue-vibrant/15 flex items-center justify-center mb-5">
                <c.icon size={22} className="text-fluxor-blue-vibrant" />
              </div>
              <h3 className="text-lg font-semibold text-fluxor-white mb-2">{c.title}</h3>
              <p className="text-fluxor-gray-medium text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
