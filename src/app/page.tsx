import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HeroBanner from "@/components/sections/HeroBanner";
import MyProjectsSection from "@/components/sections/MyProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TextimonialSection from "@/components/sections/TextimonialSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <MyProjectsSection />
      <TextimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
