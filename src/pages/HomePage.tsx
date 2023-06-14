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
      <section id="home" style={{ padding: 16 }}>
        <HomeSection />
      </section>
      <section id="about" style={{ padding: 16 }}>
        <AboutSection />
      </section>
      <section id="services" style={{ padding: 16 }}>
        <ServicesSection />
      </section>
      <section id="products" style={{ padding: 16 }}>
        <ProductsSection />
      </section>
      <section id="pricing" style={{ padding: 16 }}>
        <PricingSection />
      </section>
    </ScrollDiv>
  );
}
