"use client";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="reveal" style={{ marginBottom: "1.7rem" }}>
        <p className="roman-label" style={{ marginBottom: "0.55rem" }}>Volume IV</p>
        <h2 style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", marginBottom: "0.5rem" }}>Scholarly Background</h2>
        <div className="ornate-divider" aria-hidden="true" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        <div className="reveal-left">
          <div className="section-panel corner-flourish" style={{ padding: "1.6rem" }}>

            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "var(--brass-gradient)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Cinzel', serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--accent-foreground)",
                marginBottom: "1rem",
                textShadow: "var(--engraved)",
              }}
            >
              RH
            </div>

            <div
              style={{
                fontWeight: 500,
                fontSize: "2rem",
                marginBottom: "0.2rem",
              }}
            >
              Rakib Hasan
            </div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.62rem",
                color: "var(--accent)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              Full Stack Scholar
            </div>

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
                  fontSize: "0.98rem",
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
                margin: "1.3rem 0",
              }}
            />

            <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "1.2rem" }}>
              {[
                {
                  date: "2022 — Present",
                  title: "BScSE @ UIU",
                  sub: "United International University",
                },
                {
                  date: "2020 — Ongoing",
                  title: "Self-taught Full Stack",
                  sub: "MERN, Flask, Open Source",
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
                      border: "1.5px solid var(--accent)",
                      background: "var(--bg)",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "0.6rem",
                      color: "var(--accent)",
                      marginBottom: "0.15rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.date}
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 500 }}>{item.title}</div>
                  <div style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal-right">
          {[
            "Hi! I'm Rakib — a full stack developer with a genuine love for building things that people actually use. My sweet spot is the MERN stack (MongoDB, Express, React, Node.js), but I also enjoy crafting backend services with Python and Flask.",
            "I'm currently pursuing my Bachelor's in Software Engineering at United International University in Dhaka. Over the past 4 years of coding, I've built production-ready projects across healthcare, travel, productivity, and social good — each one a new challenge and a new lesson.",
            "My projects span PocketCare (healthcare management), Safar (travel planning), Projex (project management), and Petopia (pet adoption) — real solutions for real problems.",
            "I'm actively looking for full-time roles, internships, and freelance collaborations where I can contribute meaningfully, grow fast, and ship great products alongside great teams.",
          ].map((para, i) => (
            <p
              key={i}
              className={i === 0 ? "drop-cap" : undefined}
              style={{
                color: "var(--muted)",
                lineHeight: 1.78,
                marginBottom: "1rem",
                fontSize: "1.06rem",
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
              className="brass-outline"
              style={{ minHeight: 42, padding: "0.6rem 1rem", fontSize: "0.56rem" }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rrakib-hasan/"
              target="_blank"
              rel="noopener noreferrer"
              className="brass-outline"
              style={{ minHeight: 42, padding: "0.6rem 1rem", fontSize: "0.56rem" }}
            >
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
