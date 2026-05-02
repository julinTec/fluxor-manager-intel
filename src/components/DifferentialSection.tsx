import { useInView } from "@/hooks/useInView";

const DifferentialSection = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="bg-fluxor-black py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
        <div className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-fluxor-white leading-snug tracking-tight">
            Não somos uma agência.
            <br />
            Não somos consultores tradicionais.
          </p>
          <p className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-fluxor-blue-vibrant tracking-tight">
            Somos um sistema de crescimento.
          </p>
          <div className="mt-10 w-16 h-px bg-fluxor-blue-vibrant mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
