import { useInView } from "@/hooks/useInView";

const ProblemSection = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="bg-fluxor-gray-light py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-fluxor-graphite leading-snug tracking-tight">
            Você cresce… mas não sabe por quê.
            <br />
            <span className="text-fluxor-blue-deep">Ou pior: não consegue repetir o crescimento.</span>
          </p>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Sem previsibilidade, sua empresa depende de sorte — não de estratégia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
