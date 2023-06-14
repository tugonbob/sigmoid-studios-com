import { ScrollDiv, Spacer } from "../components/commonComponents";
import { Navbar } from "../components/customComponents";

export function HomePage() {
  return (
    <ScrollDiv>
      <Navbar />
      <Spacer size={64} />
      <section id="home">
        <Spacer size={64} />
        <h1 style={{ height: 500 }}>Home</h1>
      </section>
      <section id="about">
        <Spacer size={64} />
        <h1 style={{ height: 500 }}>About</h1>
      </section>
      <section id="services">
        <Spacer size={64} />
        <h1 style={{ height: 500 }}>Services</h1>
      </section>
      <section id="products">
        <Spacer size={64} />
        <h1 style={{ height: 500 }}>Products</h1>
      </section>
      <section id="pricing">
        <Spacer size={64} />
        <h1 style={{ height: 500 }}>Pricing</h1>
      </section>
    </ScrollDiv>
  );
}
