import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const SimulationSection = () => {
  const { ref, isInView } = useInView(0.1);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(60);
  const [people, setPeople] = useState(3);

  const hoursLostPerMonth = hoursPerWeek * people * 4;
  const monthlyCost = hoursLostPerMonth * hourlyRate;
  const possibleSavings = Math.round(monthlyCost * 0.7);

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

  return (
    <section className="bg-fluxor-gray-light py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-fluxor-blue-vibrant mb-4">
            Simulação de valor
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-fluxor-graphite tracking-tight">
            Quanto custa para sua empresa{" "}
            <span className="text-fluxor-blue-vibrant">não automatizar?</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Estime em segundos quanto sua operação perde por mês com tarefas manuais, retrabalho e falta de integração entre áreas.
          </p>
        </div>

        {/* Calculator */}
        <div className={`grid lg:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {/* Left — Inputs */}
          <div className="bg-fluxor-white rounded-2xl border border-fluxor-gray-medium/50 p-8 md:p-10">
            <h3 className="text-lg font-semibold text-fluxor-graphite mb-8">Sua realidade hoje</h3>

            <div className="space-y-8">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm text-muted-foreground">Horas perdidas por semana com tarefas manuais</label>
                  <span className="text-base font-semibold text-fluxor-graphite tabular-nums">{hoursPerWeek}h</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={40}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full slider-fluxor"
                />
                <div className="flex justify-between text-xs text-muted-foreground/50 mt-1">
                  <span>1h</span>
                  <span>40h</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm text-muted-foreground">Valor médio da hora da equipe (R$)</label>
                  <span className="text-base font-semibold text-fluxor-graphite tabular-nums">R$ {hourlyRate}</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={300}
                  step={5}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full slider-fluxor"
                />
                <div className="flex justify-between text-xs text-muted-foreground/50 mt-1">
                  <span>R$ 20</span>
                  <span>R$ 300</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-sm text-muted-foreground">Quantas pessoas participam dessas rotinas</label>
                  <span className="text-base font-semibold text-fluxor-graphite tabular-nums">{people} {people === 1 ? "pessoa" : "pessoas"}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className="w-full slider-fluxor"
                />
                <div className="flex justify-between text-xs text-muted-foreground/50 mt-1">
                  <span>1</span>
                  <span>30</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Results */}
          <div className="bg-fluxor-graphite rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-fluxor-white mb-8">O custo invisível</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-fluxor-gray-medium mb-1">Horas perdidas por mês</p>
                  <p className="text-3xl font-bold text-fluxor-white tabular-nums">{hoursLostPerMonth}h</p>
                </div>

                <div className="h-px bg-fluxor-white/10" />

                <div>
                  <p className="text-sm text-fluxor-gray-medium mb-1">Custo estimado mensal da ineficiência</p>
                  <p className="text-3xl font-bold text-fluxor-white tabular-nums">{formatCurrency(monthlyCost)}</p>
                </div>

                <div className="h-px bg-fluxor-white/10" />

                <div>
                  <p className="text-sm text-fluxor-gray-medium mb-1">Possível economia com automação</p>
                  <p className="text-3xl font-bold text-fluxor-blue-vibrant tabular-nums">{formatCurrency(possibleSavings)}</p>
                </div>
              </div>

              <p className="mt-8 text-sm text-fluxor-gray-medium leading-relaxed">
                Estimamos que até 70% desse custo pode ser eliminado com automação, IA, processos estruturados e BI integrado.
              </p>
            </div>

            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 mt-8 bg-fluxor-blue-vibrant hover:bg-fluxor-blue-vibrant/90 text-fluxor-white font-medium px-8 py-4 rounded-md transition-all hover:gap-3 text-base w-full"
            >
              Quero reduzir esse custo
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;
