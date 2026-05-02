import { useInView } from "@/hooks/useInView";

const DashboardSection = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="bg-fluxor-white py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-fluxor-graphite tracking-tight">
            Visualize sua empresa em tempo real
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Tome decisões com dados, não com achismo.</p>
        </div>

        <div className={`max-w-5xl mx-auto bg-fluxor-graphite rounded-2xl p-6 md:p-10 shadow-2xl transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {/* Top KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Receita", value: "R$ 2.4M", change: "+18%" },
              { label: "Leads", value: "1.247", change: "+32%" },
              { label: "Conversão", value: "8.4%", change: "+2.1%" },
              { label: "ROI", value: "340%", change: "+45%" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-fluxor-black/50 rounded-lg p-4">
                <p className="text-xs text-fluxor-gray-medium">{kpi.label}</p>
                <p className="text-xl font-bold text-fluxor-white mt-1">{kpi.value}</p>
                <p className="text-xs text-fluxor-blue-vibrant mt-1">{kpi.change}</p>
              </div>
            ))}
          </div>

          {/* Chart area */}
          <div className="bg-fluxor-black/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-fluxor-gray-medium font-medium">Crescimento mensal</p>
              <div className="flex gap-3">
                <span className="text-xs text-fluxor-gray-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-fluxor-blue-vibrant inline-block" /> Receita
                </span>
                <span className="text-xs text-fluxor-gray-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-fluxor-blue-deep inline-block" /> Leads
                </span>
              </div>
            </div>
            <svg viewBox="0 0 600 200" className="w-full h-auto">
              {/* Grid lines */}
              {[0, 50, 100, 150].map((y) => (
                <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="hsl(0,0%,20%)" strokeWidth="0.5" />
              ))}
              {/* Revenue line */}
              <polyline
                points="0,180 60,160 120,140 180,130 240,110 300,90 360,70 420,55 480,35 540,25 600,10"
                fill="none"
                stroke="hsl(213,83%,56%)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Leads line */}
              <polyline
                points="0,180 60,170 120,155 180,150 240,135 300,120 360,105 420,95 480,80 540,70 600,55"
                fill="none"
                stroke="hsl(214,44%,20%)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="4 4"
              />
              {/* Area fill */}
              <polygon
                points="0,180 60,160 120,140 180,130 240,110 300,90 360,70 420,55 480,35 540,25 600,10 600,200 0,200"
                fill="url(#blueGrad)"
                opacity="0.15"
              />
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(213,83%,56%)" />
                  <stop offset="100%" stopColor="hsl(213,83%,56%)" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-between mt-2 text-xs text-fluxor-gray-medium/50">
              {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov"].map(m => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* Bottom bars */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { label: "Meta atingida", pct: 87 },
              { label: "Eficiência", pct: 92 },
              { label: "Retenção", pct: 78 },
            ].map((bar) => (
              <div key={bar.label} className="bg-fluxor-black/50 rounded-lg p-4">
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-fluxor-gray-medium">{bar.label}</span>
                  <span className="text-fluxor-white font-medium">{bar.pct}%</span>
                </div>
                <div className="h-1.5 bg-fluxor-black rounded-full overflow-hidden">
                  <div
                    className="h-full bg-fluxor-blue-vibrant rounded-full transition-all duration-1000"
                    style={{ width: isInView ? `${bar.pct}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
