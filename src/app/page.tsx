import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Header from "@/components/sections/Header";
import HeroBanner from "@/components/sections/HeroBanner";
import MyProjectsSection from "@/components/sections/MyProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <MyProjectsSection />
    </main>
  );
}
