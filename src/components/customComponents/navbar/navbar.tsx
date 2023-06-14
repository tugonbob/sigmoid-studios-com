import React, { useEffect, useState } from "react";
import { HamburgerMenu } from "../hamburgerMenu";
import { Logo } from "../logo";
import "./styles.css";
import { Link } from "react-router-dom";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the screen width whenever the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={styles.navbarContainer} className="navbar">
      <Logo setMenuOpen={(changeMenu) => setMenuOpen(changeMenu)} />
      {screenWidth < 800 ? (
        <HamburgerMenu
          menuOpen={menuOpen}
          setMenuOpen={(changeMenu) => setMenuOpen(changeMenu)}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            pointerEvents: "auto",
            width: 500,
          }}
        >
          <button onClick={() => scrollToSection("about")} style={styles.link}>
            <h1 style={styles.navText} className="secondary">
              ABOUT
            </h1>
          </button>
          <button
            onClick={() => scrollToSection("products")}
            style={styles.link}
          >
            <h1 style={styles.navText} className="secondary">
              PRODUCTS
            </h1>
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            style={styles.link}
          >
            <h1 style={styles.navText} className="secondary">
              PRICING
            </h1>
          </button>
        </div>
      )}
    </nav>
  );
}

interface StyleSheet {
  [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
  navbarContainer: {
    height: 64,
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    pointerEvents: "none",
    backgroundColor: "var(--primary)",
    zIndex: 9,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  navText: {
    fontSize: 16,
  },
  link: {
    textDecorationLine: "none",
    outline: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};
