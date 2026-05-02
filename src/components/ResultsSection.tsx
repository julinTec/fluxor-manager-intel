import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

const metrics = [
  { value: 120, suffix: "%", label: "Crescimento em receita" },
  { value: 3, suffix: "x", label: "Mais eficiência operacional" },
  { value: 95, suffix: "%", label: "Previsibilidade no crescimento" },
];

function AnimatedCounter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span className="text-5xl md:text-6xl font-bold text-fluxor-white">
      +{count}{suffix}
    </span>
  );
}

const ResultsSection = () => {
  const { ref, isInView } = useInView(0.2);

  return (
    <section id="resultados" className="bg-fluxor-graphite py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-fluxor-white tracking-tight">
            Resultados que falam
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <AnimatedCounter target={m.value} suffix={m.suffix} active={isInView} />
              <p className="mt-3 text-fluxor-gray-medium text-sm tracking-wide">{m.label}</p>

              {/* Mini bar */}
              <div className="mt-4 h-1 bg-fluxor-black rounded-full overflow-hidden mx-auto max-w-[120px]">
                <div
                  className="h-full bg-fluxor-blue-vibrant rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isInView ? "100%" : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
