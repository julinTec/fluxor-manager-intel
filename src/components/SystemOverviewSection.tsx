import { Users, DollarSign, Cog, BarChart2, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const items = [
  { icon: Users, title: "CRM e gestão comercial" },
  { icon: DollarSign, title: "Controle financeiro completo" },
  { icon: Cog, title: "Gestão operacional integrada" },
  { icon: BarChart2, title: "Dashboards em tempo real" },
  { icon: Sparkles, title: "IA e automação inteligente" },
];

const SystemOverviewSection = () => {
  const { ref, isInView } = useInView(0.15);

  return (
    <section className="bg-fluxor-gray-light py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-fluxor-graphite tracking-tight">
            Um único sistema para controlar toda sua empresa
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Tudo conectado. Tudo mensurável. Tudo sob controle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 bg-fluxor-white rounded-xl border border-fluxor-gray-medium/50 p-6 transition-all duration-700 hover:shadow-lg hover:border-fluxor-blue-vibrant/30 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-fluxor-blue-vibrant/10 flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-fluxor-blue-vibrant" />
              </div>
              <p className="text-sm font-medium text-fluxor-graphite">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemOverviewSection;
