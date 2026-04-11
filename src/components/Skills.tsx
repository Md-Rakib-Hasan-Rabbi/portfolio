"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "Frontend",
    color: "var(--accent)",
    skills: [
      "React.js",
      "JavaScript / TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    color: "var(--accent)",
    skills: [
      "Node.js & Express",
      "Python",
      "Flask",
      "REST API Design",
      "JWT / Auth",
    ],
  },
  {
    title: "Database & Tools",
    color: "var(--accent-secondary)",
    skills: [
      "MongoDB",
      "Mongoose",
      "Firebase",
      "Git & GitHub",
      "Postman",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimate(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="section-shell">
      <div className="reveal" style={{ marginBottom: "2rem" }}>
        <p className="roman-label" style={{ marginBottom: "0.55rem" }}>Volume II</p>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: "0.5rem" }}>Disciplines & Instruments</h2>
        <p style={{ color: "var(--muted)", maxWidth: 620, fontSize: "1.03rem" }}>
          A measured inventory of the tools, languages, and practices used in scholarly software construction.
        </p>
        <div className="ornate-divider" style={{ marginTop: "1rem" }} aria-hidden="true" />
      </div>

      {/* Skills grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {skillGroups.map((group, gi) => (
          <div
            key={group.title}
            className="reveal section-panel corner-flourish"
            style={{
              padding: "1.3rem",
              transitionDelay: `${gi * 0.1}s`,
              overflow: "visible",
            }}
          >
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                color: "var(--accent)",
                marginBottom: "1.2rem",
                textTransform: "uppercase",
              }}
            >
              {group.title}
            </div>
            <ul style={{ display: "grid", gap: "0.6rem", listStyle: "none" }}>
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  style={{
                    color: "var(--text)",
                    fontSize: "0.96rem",
                    lineHeight: 1.6,
                    borderLeft: `2px solid ${group.color}`,
                    paddingLeft: "0.55rem",
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ marginTop: "2.5rem" }}>
        <p className="display-font" style={{ fontSize: "0.58rem", color: "var(--muted)", marginBottom: "0.8rem" }}>
          Appendix · Additional Instruments
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["Redux", "Context API", "Stripe API", "Socket.io", "Axios", "Mongoose", "bcrypt", "dotenv", "Vercel", "Render", "Netlify"].map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.58rem",
                letterSpacing: "0.14em",
                padding: "0.36rem 0.75rem",
                borderRadius: 4,
                border: "1px solid var(--border)",
                color: "var(--muted)",
                background: "var(--bg-alt)",
                transition: "all 0.3s ease-out",
                cursor: "default",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
