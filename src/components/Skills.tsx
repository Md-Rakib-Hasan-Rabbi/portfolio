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
    color: "var(--accent2)",
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
    color: "var(--accent3)",
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
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.75rem",
        }}
      >
        <span style={{ color: "var(--text)" }}>{name}</span>
        <span style={{ color: "var(--muted)" }}>{level}%</span>
      </div>
      <div
        style={{
          height: 4,
          background: "rgba(255,255,255,0.05)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animate ? `${level}%` : "0%",
            background: color,
            borderRadius: 2,
            transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
            boxShadow: `0 0 8px ${color}60`,
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
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "6rem 6%",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Section header */}
      <div className="reveal" style={{ marginBottom: "3rem" }}>
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
          technical expertise
        </div>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            letterSpacing: "-1px",
            marginBottom: "0.6rem",
          }}
        >
          My Stack
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "0.93rem", maxWidth: 480 }}>
          Tools and technologies I use to build full-stack applications end-to-end.
        </p>
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
            className="reveal"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "1.75rem",
              transitionDelay: `${gi * 0.1}s`,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${group.color}40`; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            {/* Accent bar top */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: group.color,
                opacity: 0.6,
              }}
            />
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                color: group.color,
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

      {/* Tech pill cloud */}
      <div className="reveal" style={{ marginTop: "2.5rem" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--muted)", marginBottom: "1rem", letterSpacing: "0.08em" }}>
          ALSO WORKED WITH
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {["Redux", "Context API", "Stripe API", "Socket.io", "Axios", "Mongoose", "bcrypt", "dotenv", "Vercel", "Render", "Netlify"].map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                padding: "4px 12px",
                borderRadius: 100,
                border: "1px solid rgba(255,255,255,0.08)",
                color: "var(--muted)",
                background: "rgba(255,255,255,0.02)",
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,106,255,0.4)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
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
