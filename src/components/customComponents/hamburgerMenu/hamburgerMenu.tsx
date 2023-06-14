import React from "react";
import { FullscreenDiv } from "../../commonComponents";
import "./styles.css";

export function HamburgerMenu({
  menuOpen,
  setMenuOpen,
  d,
}: {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  d?: boolean;
}) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    setMenuOpen(false);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        style={{
          ...styles.hamburgerContainer,
          ...{
            border: d ? "1px solid black" : undefined,
          },
        }}
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger-container"
      >
        <hr
          style={styles.line}
          className={`top-line ${menuOpen ? "fade-left" : "fade-left-reverse"}`}
        />
        <hr
          style={styles.line}
          className={`middle-line ${
            menuOpen ? "rotate-clockwise" : "rotate-clockwise-reverse"
          }`}
        />
        <hr
          style={styles.line}
          className={`hidden-middle-line ${
            menuOpen
              ? "rotate-counter-clockwise"
              : "rotate-counter-clockwise-reverse"
          }`}
        />
        <hr
          style={styles.line}
          className={`bottom-line ${
            menuOpen ? "fade-right" : "fade-right-reverse"
          }`}
        />
      </div>

      <FullscreenDiv
        style={{
          ...styles.menuContainer,
          ...{ pointerEvents: menuOpen ? "auto" : "none" },
        }}
        className={`menu-container ${
          menuOpen ? "fade-background" : "fade-background-reverse"
        }`}
      >
        <>
          <div style={styles.menu}>
            <button
              onClick={() => scrollToSection("about")}
              style={styles.link}
              className={menuOpen ? "fade-down-reverse" : "fade-down"}
            >
              <h1 style={styles.menuItem} className="secondary">
                ABOUT
              </h1>
            </button>
            <button
              onClick={() => scrollToSection("works")}
              style={styles.link}
              className={menuOpen ? "fade-down-reverse" : "fade-down"}
            >
              <h1 style={styles.menuItem} className="secondary">
                WORKS
              </h1>
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              style={styles.link}
              className={menuOpen ? "fade-down-reverse" : "fade-down"}
            >
              <h1 style={styles.menuItem} className="secondary">
                CONTACT
              </h1>
            </button>
          </div>

          <div style={styles.footer} className="hamburger-menu-footer">
            <h4
              style={{ marginBottom: 16, fontSize: "3vh" }}
              className="contact"
            >
              sigmoid.studios.llc@gmail.com
            </h4>
          </div>
        </>
      </FullscreenDiv>
    </>
  );
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  hamburgerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: "2vw",
    marginTop: "2vh",
    marginBottom: "2vh",
    pointerEvents: "auto",
    zIndex: 11,
  },
  line: {
    border: "1px solid black",
    height: 0,
    width: 32,
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-between",
    top: 0,
    marginRight: 32,
    zIndex: 10,
    backgroundColor: "#f7f7f7",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: 32,
    marginTop: "20vh",
  },
  menuItem: {
    fontSize: "9.5vh",
  },
  link: {
    textDecoration: "none",
    outline: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};
