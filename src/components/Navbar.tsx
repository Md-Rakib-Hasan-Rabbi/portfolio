"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["skills", "projects", "about", "contact"];

  return (
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
        padding: "1.1rem 6%",
        background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        animation: "fadeIn 0.6s ease both",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "1.2rem",
          color: "var(--text)",
          textDecoration: "none",
          letterSpacing: "-0.5px",
        }}
      >
        RH<span style={{ color: "var(--accent)" }}>.</span>
      </Link>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
        }}
        className="nav-desktop"
      >
        {links.map((link, i) => (
          <li key={link}>
            <a
              href={`#${link}`}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.78rem",
                color: "var(--muted)",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
                animation: `fadeIn 0.5s ${0.1 + i * 0.08}s ease both`,
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.78rem",
          color: "var(--accent)",
          border: "1px solid var(--accent)",
          padding: "0.45rem 1.1rem",
          borderRadius: "4px",
          textDecoration: "none",
          letterSpacing: "0.05em",
          transition: "all 0.2s",
          animation: "fadeIn 0.5s 0.4s ease both",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.background = "var(--accent)";
          el.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.background = "transparent";
          el.style.color = "var(--accent)";
        }}
      >
        hire me ↗
      </a>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
