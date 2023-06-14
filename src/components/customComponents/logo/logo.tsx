import React from "react";
import { RowDiv } from "../../commonComponents";
import sigma from "../../../assets/images/sigma.png";
import { Link } from "react-router-dom";

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
          alt="" // required by eslint
        />
        <h1 style={styles.lastName} className="secondary">
          STUDIOS
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
