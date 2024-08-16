import Section1 from "./Section1/Section1";
import Services from "./ServicesSection/Services";
import SkillsSection from "./SkillsSection/SkillsSection";



export default function HomePage() {
  return (
    <div>
        <Section1 />
        <Services />
        <SkillsSection />
    </div>
  )
}
