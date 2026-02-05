import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ImpactSection from "@/components/ImpactSection";
import MythsSection from "@/components/MythsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <WhyChooseSection />
        <ImpactSection />
        <MythsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
