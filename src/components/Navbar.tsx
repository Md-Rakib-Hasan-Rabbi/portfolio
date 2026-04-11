"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["skills", "projects", "about", "contact"];

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 6%",
          background: scrolled ? "rgba(28,23,20,0.95)" : "rgba(28,23,20,0.75)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
          transition: "all 0.5s ease-out",
          animation: "fadeIn 0.6s ease both",
        }}
      >
        <Link
          href="/"
          onClick={closeMobileMenu}
          style={{
            fontFamily: "'Cinzel', serif",
            fontWeight: 600,
            fontSize: "1rem",
            color: "var(--accent)",
            textDecoration: "none",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Rakib Hasan
        </Link>

        <ul
          style={{
            display: "flex",
            gap: "1.5rem",
            listStyle: "none",
          }}
          className="nav-desktop"
        >
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link}`}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.62rem",
                  color: "var(--muted)",
                  textDecoration: "none",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease-out, letter-spacing 0.3s ease-out",
                  animation: `fadeIn 0.5s ${0.1 + i * 0.08}s ease both`,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "var(--accent)";
                  (e.target as HTMLElement).style.letterSpacing = "0.24em";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--muted)";
                  (e.target as HTMLElement).style.letterSpacing = "0.2em";
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="brass-button nav-cta" style={{ minHeight: 40, padding: "0.5rem 1rem", fontSize: "0.58rem", animation: "fadeIn 0.5s 0.4s ease both" }}>
          Hire Me
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="nav-mobile-toggle"
          style={{
            border: "1px solid var(--border)",
            background: "var(--bg-alt)",
            color: "var(--accent)",
            fontFamily: "'Cinzel', serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontSize: "0.58rem",
            minHeight: 38,
            minWidth: 64,
            borderRadius: 4,
            padding: "0.4rem 0.7rem",
            cursor: "pointer",
          }}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {mobileOpen ? (
        <div
          className="nav-mobile-panel"
          style={{
            position: "fixed",
            top: 70,
            left: "5%",
            right: "5%",
            zIndex: 99,
            border: "1px solid var(--border)",
            background: "color-mix(in srgb, var(--bg-alt) 92%, transparent)",
            borderRadius: 6,
            padding: "0.7rem",
            display: "grid",
            gap: "0.5rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={closeMobileMenu}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.62rem",
                color: "var(--muted)",
                textDecoration: "none",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "1px solid var(--border)",
                borderRadius: 4,
                padding: "0.6rem 0.75rem",
                background: "var(--bg)",
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="brass-button"
            style={{ minHeight: 40, fontSize: "0.56rem" }}
          >
            Hire Me
          </a>
        </div>
      ) : null}

      <style>{`
        .nav-mobile-toggle,
        .nav-mobile-panel {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-desktop,
          .nav-cta {
            display: none !important;
          }

          .nav-mobile-toggle,
          .nav-mobile-panel {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
