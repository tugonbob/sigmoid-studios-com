import { ScrollDiv } from "../components/commonComponents";
import { Navbar } from "../components/customComponents";
import {
  AboutSection,
  ContactSection,
  HomeSection,
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
      <section id="works">
        <WorksSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Navbar />
    </ScrollDiv>
  );
}
