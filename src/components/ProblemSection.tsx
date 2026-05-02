import { useInView } from "@/hooks/useInView";

const ProblemSection = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="bg-fluxor-gray-light py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-fluxor-graphite leading-snug tracking-tight">
            Você cresce… mas não tem controle real do que está acontecendo.
          </p>
          <div className="mt-10 space-y-4 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto text-left">
            <p>Vendas não são previsíveis.</p>
            <p>O financeiro não traz clareza.</p>
            <p>A operação depende de esforço manual.</p>
          </div>
          <p className="mt-10 text-xl md:text-2xl font-semibold text-fluxor-blue-deep tracking-tight">
            Sem um sistema, sua empresa cresce no escuro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
