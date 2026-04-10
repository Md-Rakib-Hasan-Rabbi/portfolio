"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "6rem 6%",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left: Card */}
        <div className="reveal-left">
          <div
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
              animation: "borderGlow 4s ease infinite",
            }}
          >
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                bottom: -50,
                right: -50,
                width: 160,
                height: 160,
                borderRadius: "50%",
                background: "var(--glow)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />

            {/* Avatar */}
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent), #b490ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Syne', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              RH
            </div>

            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                marginBottom: "0.2rem",
              }}
            >
              Rakib Hasan
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.78rem",
                color: "var(--accent2)",
                marginBottom: "1.2rem",
              }}
            >
              {"// full_stack_developer"}
            </div>

            {/* Info rows */}
            {[
              { icon: "📍", text: "Dhaka, Bangladesh" },
              { icon: "🎓", text: "BScSE — United International University" },
              { icon: "💼", text: "Open to full-time & freelance roles" },
            ].map((row) => (
              <div
                key={row.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  marginBottom: "0.5rem",
                }}
              >
                <span style={{ fontSize: "0.9rem" }}>{row.icon}</span>
                {row.text}
              </div>
            ))}

            <div
              style={{
                height: 1,
                background: "var(--border)",
                margin: "1.2rem 0",
              }}
            />

            {/* Timeline */}
            <div style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "1.2rem" }}>
              {[
                {
                  date: "2022 — Present",
                  title: "BScSE @ UIU",
                  sub: "United International University",
                  color: "var(--accent)",
                },
                {
                  date: "2020 — Ongoing",
                  title: "Self-taught Full Stack",
                  sub: "MERN, Flask, Open Source",
                  color: "var(--accent2)",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{ position: "relative", marginBottom: "1.2rem" }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-1.45rem",
                      top: 6,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      border: `1.5px solid ${item.color}`,
                      background: "var(--bg)",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.68rem",
                      color: item.color,
                      marginBottom: "0.15rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {item.date}
                  </div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 500 }}>{item.title}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="reveal-right">
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}
          >
            background
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              letterSpacing: "-1px",
              marginBottom: "1.5rem",
            }}
          >
            About Me
          </h2>

          {[
            "Hi! I'm Rakib — a full stack developer with a genuine love for building things that people actually use. My sweet spot is the MERN stack (MongoDB, Express, React, Node.js), but I also enjoy crafting backend services with Python and Flask.",
            "I'm currently pursuing my Bachelor's in Software Engineering at United International University in Dhaka. Over the past 4 years of coding, I've built production-ready projects across healthcare, travel, productivity, and social good — each one a new challenge and a new lesson.",
            "My projects span PocketCare (healthcare management), Safar (travel planning), Projex (project management), and Petopia (pet adoption) — real solutions for real problems.",
            "I'm actively looking for full-time roles, internships, and freelance collaborations where I can contribute meaningfully, grow fast, and ship great products alongside great teams.",
          ].map((para, i) => (
            <p
              key={i}
              style={{
                color: "var(--muted)",
                lineHeight: 1.78,
                marginBottom: "1rem",
                fontSize: "0.92rem",
              }}
            >
              {para}
            </p>
          ))}

          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            <a
              href="https://github.com/Md-Rakib-Hasan-Rabbi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0.65rem 1.3rem",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                fontSize: "0.85rem",
                color: "var(--muted)",
                textDecoration: "none",
                fontFamily: "'DM Mono', monospace",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rrakib-hasan/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0.65rem 1.3rem",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                fontSize: "0.85rem",
                color: "var(--muted)",
                textDecoration: "none",
                fontFamily: "'DM Mono', monospace",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
