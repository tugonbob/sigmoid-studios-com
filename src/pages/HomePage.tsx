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
      <main>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Organization",
            name: "Sigmoid Studios",
            legalName: "Sigmoid Studios LLC",
            keywords:
              "Mobile, Application, Development, Sigmoid, Studios, Android, iOS, React, React-Native",
            logo: "https://static.vecteezy.com/system/resources/previews/017/177/975/original/greek-alphabet-symbol-sigma-on-transparent-background-free-png.png",
            telephone: "713-376-2868",
            email: "sigmoid.studios.llc@gmail.com",
            url: "sigmoidstudios.com",
          })}
        </script>
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
      </main>
      <Navbar />
    </ScrollDiv>
  );
}
