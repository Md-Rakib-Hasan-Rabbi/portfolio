"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React Specialist",
  "Python Developer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [count, setCount] = useState({ projects: 0, years: 0, tech: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsAnimated = useRef(false);

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Count-up animation for stats
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !statsAnimated.current) {
        statsAnimated.current = true;
        animateCount("projects", 4, 800);
        animateCount("years", 4, 900);
        animateCount("tech", 10, 1000);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function animateCount(key: "projects" | "years" | "tech", target: number, duration: number) {
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount((prev) => ({ ...prev, [key]: Math.round(eased * target) }));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  return (
    <section id="home" className="section-shell" style={{ minHeight: "100vh", borderTop: "none", paddingTop: "7.5rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.95fr 0.75fr",
          gap: "1.6rem",
          alignItems: "start",
        }}
      >
        <div className="reveal">
          <p className="roman-label" style={{ marginBottom: "0.7rem" }}>Volume I</p>
          <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 4.8rem)", lineHeight: 1.08, marginBottom: "0.6rem" }}>
            The Scholarly
            <br />
            Engineer
          </h1>
          <div style={{ marginBottom: "1rem", color: "var(--accent)", fontFamily: "Cinzel, serif", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.78rem" }}>
            {displayed}
            <span style={{ borderRight: "2px solid var(--accent)", marginLeft: 6, animation: "blink 0.8s step-end infinite" }} />
          </div>
          <p className="drop-cap" style={{ maxWidth: 560, color: "var(--text)", marginBottom: "1.6rem", fontSize: "1.06rem", lineHeight: 1.72 }}>
            Dedicated to crafting resilient web systems with MERN and Python, I pursue software as both an engineering discipline and an intellectual craft at United International University, Dhaka.
          </p>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <a href="#projects" className="brass-button">Explore Portfolio</a>
            <a href="https://github.com/Md-Rakib-Hasan-Rabbi" target="_blank" rel="noopener noreferrer" className="brass-outline">View Repository</a>
          </div>
          <div style={{ marginTop: "1.3rem" }} className="ornate-divider" aria-hidden="true" />
        </div>

        <div className="reveal section-panel corner-flourish" style={{ overflow: "visible" }}>
          <div className="wax-seal" style={{ position: "absolute", top: -18, right: 22 }} aria-hidden="true">✶</div>
          <div className="arch-top" style={{ border: "1px solid var(--border)", background: "var(--bg)", aspectRatio: "4 / 5", position: "relative" }}>
            <Image
              src="/rakib.jpg"
              alt="Portrait of Rakib Hasan"
              fill
              className="sepia-image"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
          <p className="display-font" style={{ color: "var(--accent)", marginTop: "0.9rem", fontSize: "0.62rem", textAlign: "center" }}>
            Distinguished Candidate · BScSE
          </p>
        </div>

        <div ref={statsRef} className="reveal-right" style={{ display: "grid", gap: "0.7rem" }}>
          {[
            { num: count.projects, suffix: "+", label: "Curated Works" },
            { num: count.years, suffix: "+", label: "Years of Practice" },
            { num: count.tech, suffix: "+", label: "Technologies" },
          ].map((stat, idx) => (
            <article key={stat.label} className="section-panel" style={{ padding: "1rem 1.1rem", transitionDelay: `${idx * 120}ms` }}>
              <p className="display-font" style={{ color: "var(--muted)", fontSize: "0.57rem", marginBottom: "0.38rem" }}>
                {idx === 0 ? "I" : idx === 1 ? "II" : "III"}
              </p>
              <h3 style={{ color: "var(--accent)", fontSize: "2rem", lineHeight: 1 }}>
                {stat.num}
                {stat.suffix}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.92rem" }}>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          #home > div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
