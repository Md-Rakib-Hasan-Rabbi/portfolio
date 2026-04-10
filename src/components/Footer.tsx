"use client";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        textAlign: "center",
        padding: "2rem 6%",
        borderTop: "1px solid var(--border)",
        background: "color-mix(in srgb, var(--bg-alt) 65%, transparent)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "'Cinzel', serif",
          fontWeight: 600,
          fontSize: "0.86rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
        }}
      >
        House of Hasan
      </span>

      <span
        style={{
          fontSize: "0.96rem",
          color: "var(--muted)",
        }}
      >
        designed & built by{" "}
        <span style={{ color: "var(--accent)" }}>Rakib Hasan</span>{" "}
        · {new Date().getFullYear()}
      </span>

      <a
        href="#home"
        className="brass-link"
        style={{ fontSize: "0.58rem" }}
      >
        Return to Prelude ↑
      </a>
    </footer>
  );
}
