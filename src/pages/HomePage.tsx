import { ScrollDiv, Spacer } from "../components/commonComponents";
import { Navbar } from "../components/customComponents";
import {
  HomeSection,
  AboutSection,
  ServicesSection,
  ProductsSection,
  PricingSection,
  ProcessSection,
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
        <ProductsSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
    </ScrollDiv>
  );
}
