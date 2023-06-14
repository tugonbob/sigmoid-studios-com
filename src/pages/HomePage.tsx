import { ScrollDiv, Spacer } from "../components/commonComponents";
import { Navbar } from "../components/customComponents";
import { HomeSection } from "./sections";
import { AboutSection } from "./sections/AboutSection";
import { PricingSection } from "./sections/PricingSection";
import { ProductsSection } from "./sections/ProductsSection";
import { ServicesSection } from "./sections/ServicesSection";

export function HomePage() {
  return (
    <ScrollDiv>
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
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
