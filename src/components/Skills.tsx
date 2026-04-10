"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "Frontend",
    color: "var(--accent)",
    skills: [
      { name: "React.js", level: 92 },
      { name: "JavaScript / TypeScript", level: 88 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    title: "Backend",
    color: "var(--accent)",
    skills: [
      { name: "Node.js & Express", level: 90 },
      { name: "Python", level: 85 },
      { name: "Flask", level: 80 },
      { name: "REST API Design", level: 88 },
      { name: "JWT / Auth", level: 82 },
    ],
  },
  {
    title: "Database & Tools",
    color: "var(--accent-secondary)",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "Mongoose", level: 85 },
      { name: "Firebase", level: 78 },
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
    ],
  },
];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div style={{ marginBottom: "0.9rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.3rem",
          fontFamily: "'Crimson Pro', serif",
          fontSize: "0.9rem",
        }}
      >
        <span style={{ color: "var(--text)" }}>{name}</span>
      </div>
      <div
        style={{
          height: 8,
          background: "var(--muted-surface)",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animate ? `${level}%` : "0%",
            background: color,
            borderRadius: 4,
            transition: "width 1.2s ease-out",
          }}
        />
      </div>
    </div>
  );
}

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
            {group.skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} color={group.color} animate={animate} />
            ))}
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
