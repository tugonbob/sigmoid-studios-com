import { ScrollDiv } from "../components/commonComponents";
import { Navbar } from "../components/customComponents";
import {
  AboutSection,
  HomeSection,
  PricingSection,
  ProcessSection,
  ServicesSection,
  WorksSection,
} from "./sections";
export function HomePage() {
  return (
    <ScrollDiv>
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
      </section>
      <section id="products">
        <WorksSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
    </ScrollDiv>
  );
}
