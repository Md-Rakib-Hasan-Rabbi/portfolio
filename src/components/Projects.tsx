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
    github: "https://github.com/Md-Rakib-Hasan-Rabbi",
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
    github: "https://github.com/Md-Rakib-Hasan-Rabbi",
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
    github: "https://github.com/Md-Rakib-Hasan-Rabbi",
    live: "",
    featured: false,
  },
  {
    name: "Petopia",
    emoji: "🐾",
    iconBg: "rgba(250,199,117,0.08)",
    accentColor: "#fac775",
    description:
      "A pet adoption and care platform connecting loving homes with animals in need. Features searchable pet listings, adoption request workflows, pet care guides, and a donation system for shelters.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Firebase"],
    github: "https://github.com/Md-Rakib-Hasan-Rabbi",
    live: "",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      style={{
        background: "var(--surface)",
        border: `1px solid ${hovered ? project.accentColor + "40" : "var(--border)"}`,
        borderRadius: 16,
        padding: "1.8rem",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transitionDelay: `${index * 0.08}s`,
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top glow line on hover */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s",
        }}
      />

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: project.accentColor + "08",
          filter: "blur(40px)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s",
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: project.iconBg,
          border: `1px solid ${project.accentColor}25`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          marginBottom: "1.2rem",
          transition: "transform 0.3s",
          transform: hovered ? "scale(1.1) rotate(-4deg)" : "scale(1) rotate(0)",
        }}
      >
        {project.emoji}
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "1.3rem",
          letterSpacing: "-0.5px",
          marginBottom: "0.6rem",
          color: hovered ? project.accentColor : "var(--text)",
          transition: "color 0.3s",
        }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--muted)",
          lineHeight: 1.7,
          marginBottom: "1.2rem",
        }}
      >
        {project.description}
      </p>

      {/* Stack pills */}
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
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.68rem",
              padding: "3px 10px",
              borderRadius: 100,
              background: project.accentColor + "12",
              color: project.accentColor,
              border: `1px solid ${project.accentColor}25`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            color: hovered ? project.accentColor : "var(--muted)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          Source Code
          <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ transform: hovered ? "translate(2px,-2px)" : "none", transition: "transform 0.2s" }}>
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 6%",
        position: "relative",
        zIndex: 1,
      }}
    >
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
          featured work
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
          Projects
        </h2>
        <p style={{ color: "var(--muted)", fontSize: "0.93rem", maxWidth: 500 }}>
          A selection of projects built with real-world use cases in mind. Each one pushed me to learn and grow as an engineer.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8rem",
            color: "var(--muted)",
            textDecoration: "none",
            border: "1px solid var(--border2)",
            padding: "0.6rem 1.4rem",
            borderRadius: 8,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border2)"; }}
        >
          View all repositories on GitHub ↗
        </a>
      </div>
    </section>
  );
}
