import React from "react";
import sigma from "../../../assets/images/sigma.png";
import { RowDiv } from "../../commonComponents";

export function Logo({
  setMenuOpen,
}: {
  setMenuOpen: (menuOpen: boolean) => void;
}) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <RowDiv
      style={{
        pointerEvents: "auto",
        zIndex: 11,
        marginLeft: "2vw",
      }}
    >
      <button onClick={() => scrollToSection("home")} style={styles.link}>
        <img
          src={sigma}
          style={{ ...styles.image }}
          alt="Sigmoid Studios LLC Logo"
        />
        <h1 style={styles.lastName} className="secondary">
          SIGMOID STUDIOS
        </h1>
      </button>
    </RowDiv>
  );
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    outline: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  image: {
    height: 16,
    marginRight: 4,
    zIndex: 11,
  },
  lastName: {
    marginLeft: 8,
    fontSize: 16,
  },
};
