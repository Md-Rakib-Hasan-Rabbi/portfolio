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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "1.1rem",
          letterSpacing: "-0.5px",
        }}
      >
        RH<span style={{ color: "var(--accent)" }}>.</span>
      </span>

      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.73rem",
          color: "var(--muted)",
        }}
      >
        designed & built by{" "}
        <span style={{ color: "var(--accent)" }}>Rakib Hasan</span>{" "}
        · {new Date().getFullYear()}
      </span>

      <a
        href="#home"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.72rem",
          color: "var(--muted)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 6,
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
      >
        back to top ↑
      </a>
    </footer>
  );
}
