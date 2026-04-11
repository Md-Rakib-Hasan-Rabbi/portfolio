"use client";

import { useState } from "react";

const projects = [
  {
    name: "PocketCare",
    emoji: "🏥",
    iconBg: "rgba(0,229,160,0.08)",
    accentColor: "#00e5a0",
    description:
      "A comprehensive healthcare management platform enabling patients to book appointments, track medical history, manage prescriptions, and connect with healthcare professionals — bringing primary care to your pocket.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/Md-Rakib-Hasan-Rabbi/PocketCare",
    live: "",
    featured: true,
  },
  {
    name: "Safar",
    emoji: "✈️",
    iconBg: "rgba(124,106,255,0.08)",
    accentColor: "#7c6aff",
    description:
      "A full-featured travel companion application for discovering destinations, planning day-by-day itineraries, and sharing trip experiences. Built for wanderers who need seamless trip organization with interactive maps.",
    stack: ["React", "Express", "MongoDB", "Firebase Auth", "Maps API", "Node.js"],
    github: "https://github.com/Md-Rakib-Hasan-Rabbi/safar",
    live: "",
    featured: false,
  },
  {
    name: "Projex",
    emoji: "📋",
    iconBg: "rgba(255,107,107,0.08)",
    accentColor: "#ff6b6b",
    description:
      "A collaborative project management tool with Kanban task boards, team workspaces, role-based access, and real-time progress tracking. Designed to keep development teams aligned and shipping fast.",
    stack: ["MERN Stack", "Socket.io", "JWT", "Tailwind CSS", "REST API"],
    github: "https://github.com/Md-Rakib-Hasan-Rabbi/ProjeX",
    live: "",
    featured: false,
  },
  {
    name: "Expense Tracker",
    emoji: "💸",
    iconBg: "rgba(250,199,117,0.08)",
    accentColor: "#fac775",
    description:
      "A full-stack personal finance app for tracking income and expenses, managing budgets, and visualizing spending trends through interactive dashboards and reports.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "Supabase Postgres", "JWT"],
    github: "https://github.com/Md-Rakib-Hasan-Rabbi/expense-tracker",
    live: "",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal section-panel corner-flourish"
      style={{
        borderColor: hovered ? "var(--accent)" : "var(--border)",
        padding: "1.5rem",
        overflow: "visible",
        transition: "all 0.5s ease-out",
        transitionDelay: `${index * 0.08}s`,
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.featured ? (
        <div className="wax-seal" style={{ position: "absolute", top: -18, right: 20 }} aria-hidden="true">✶</div>
      ) : null}

      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "var(--bg)",
          border: "1px solid var(--accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          marginBottom: "1rem",
          transition: "transform 0.5s ease-out",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
      >
        {project.emoji}
      </div>

      <p className="display-font" style={{ fontSize: "0.54rem", color: "var(--muted)", marginBottom: "0.35rem" }}>
        {index === 0 ? "I" : index === 1 ? "II" : index === 2 ? "III" : "IV"}
      </p>

      <h3
        style={{
          fontWeight: 500,
          fontSize: "1.9rem",
          marginBottom: "0.6rem",
          color: hovered ? "var(--accent)" : "var(--text)",
          transition: "color 0.5s ease-out",
        }}
      >
        {project.name}
      </h3>

      <p
        style={{
          fontSize: "1rem",
          color: "var(--muted)",
          lineHeight: 1.7,
          marginBottom: "1.2rem",
        }}
      >
        {project.description}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          marginBottom: "1.4rem",
        }}
      >
        {project.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.52rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "0.3rem 0.55rem",
              borderRadius: 4,
              background: "var(--bg)",
              color: "var(--accent)",
              border: "1px solid var(--border)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="brass-outline"
          style={{ minHeight: 38, padding: "0.46rem 0.8rem", fontSize: "0.52rem" }}
        >
          View Manuscript
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="reveal" style={{ marginBottom: "3rem" }}>
        <p className="roman-label" style={{ marginBottom: "0.55rem" }}>Volume III</p>
        <h2
          style={{
            fontSize: "clamp(2rem, 3.8vw, 3.1rem)",
            marginBottom: "0.6rem",
          }}
        >
          Collected Works
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: 700 }}>
          A catalog of practical systems crafted with care, each entry framed as a formal study in product engineering.
        </p>
        <div className="ornate-divider" style={{ marginTop: "1rem" }} aria-hidden="true" />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>

      <div className="reveal" style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <a
          href="https://github.com/Md-Rakib-Hasan-Rabbi"
          target="_blank"
          rel="noopener noreferrer"
          className="brass-button"
          style={{ minHeight: 44, padding: "0.62rem 1.3rem", fontSize: "0.58rem" }}
        >
          More Projects...
        </a>
      </div>
    </section>
  );
}
