import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import DifferentialSection from "@/components/DifferentialSection";
import SimulationSection from "@/components/SimulationSection";
import DashboardSection from "@/components/DashboardSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <WhatWeDoSection />
      <ProcessSection />
      <ResultsSection />
      <DifferentialSection />
      <SimulationSection />
      <DashboardSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
