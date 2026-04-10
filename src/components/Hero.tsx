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
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "7rem 6% 5rem",
        gap: "3rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* LEFT: Text content */}
      <div style={{ flex: 1, maxWidth: 580 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(124,106,255,0.1)",
            border: "1px solid rgba(124,106,255,0.25)",
            color: "var(--accent)",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.73rem",
            padding: "0.4rem 0.9rem",
            borderRadius: "100px",
            marginBottom: "1.8rem",
            letterSpacing: "0.05em",
            animation: "fadeUp 0.6s 0.1s ease both",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--accent2)",
              display: "inline-block",
              animation: "pulse 2s ease infinite",
            }}
          />
          available for opportunities
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3rem, 6vw, 5.2rem)",
            lineHeight: 1.03,
            letterSpacing: "-2.5px",
            marginBottom: "1rem",
            animation: "fadeUp 0.6s 0.2s ease both",
          }}
        >
          Rakib
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px var(--accent)",
            }}
          >
            Hasan
          </span>
        </h1>

        {/* Typewriter role */}
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            color: "var(--accent2)",
            marginBottom: "1.4rem",
            minHeight: "1.5rem",
            animation: "fadeUp 0.6s 0.3s ease both",
          }}
        >
          <span>{displayed}</span>
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: "1em",
              background: "var(--accent2)",
              marginLeft: 2,
              verticalAlign: "middle",
              animation: "blink 0.7s step-end infinite",
            }}
          />
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "0.98rem",
            color: "var(--muted)",
            maxWidth: 460,
            lineHeight: 1.75,
            marginBottom: "2.2rem",
            animation: "fadeUp 0.6s 0.4s ease both",
          }}
        >
          Crafting{" "}
          <strong style={{ color: "var(--text)", fontWeight: 400 }}>
            scalable web experiences
          </strong>{" "}
          with the MERN stack & Python. Currently pursuing BScSE at{" "}
          <strong style={{ color: "var(--text)", fontWeight: 400 }}>
            United International University
          </strong>
          , Dhaka.
        </p>

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            animation: "fadeUp 0.6s 0.5s ease both",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.88rem",
              fontWeight: 500,
              padding: "0.72rem 1.5rem",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#9380ff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            View Projects
          </a>

          <a
            href="https://github.com/Md-Rakib-Hasan-Rabbi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "var(--text)",
              border: "1px solid rgba(255,255,255,0.12)",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.88rem",
              fontWeight: 400,
              padding: "0.72rem 1.5rem",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* CENTER: Photo */}
      <div
        style={{
          flex: "0 0 auto",
          display: "flex",
          justifyContent: "center",
          animation: "fadeUp 0.8s 0.35s ease both",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 320,
            height: 380,
          }}
        >
          {/* Animated orbit ring */}
          <div
            style={{
              position: "absolute",
              inset: -18,
              borderRadius: "50%",
              border: "1px solid rgba(124,106,255,0.2)",
              animation: "rotateSlow 20s linear infinite",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -5,
                left: "50%",
                transform: "translateX(-50%)",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 12px var(--accent)",
              }}
            />
          </div>

          {/* Outer glow ring */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 24,
              background: "linear-gradient(135deg, rgba(124,106,255,0.3), rgba(0,229,160,0.15))",
              filter: "blur(20px)",
              zIndex: 0,
            }}
          />

          {/* Photo frame */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: 22,
              overflow: "hidden",
              border: "1px solid rgba(124,106,255,0.3)",
              zIndex: 1,
              background: "var(--surface)",
              animation: "float 6s ease-in-out infinite",
            }}
          >
            <Image
              src="/rakib.jpg"
              alt="Rakib Hasan"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />

            {/* Overlay shimmer */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(124,106,255,0.08) 0%, transparent 60%, rgba(0,229,160,0.05) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Floating badge - experience */}
          <div
            style={{
              position: "absolute",
              bottom: -16,
              left: -20,
              background: "var(--surface)",
              border: "1px solid rgba(124,106,255,0.3)",
              borderRadius: 12,
              padding: "0.6rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
              zIndex: 2,
              animation: "float 5s 1s ease-in-out infinite",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>⚡</span>
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  lineHeight: 1,
                  color: "var(--text)",
                }}
              >
                4 yrs
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  color: "var(--muted)",
                }}
              >
                coding
              </div>
            </div>
          </div>

          {/* Floating badge - stack */}
          <div
            style={{
              position: "absolute",
              top: -16,
              right: -20,
              background: "var(--surface)",
              border: "1px solid rgba(0,229,160,0.3)",
              borderRadius: 12,
              padding: "0.6rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
              zIndex: 2,
              animation: "float 5.5s 0.5s ease-in-out infinite",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>🔥</span>
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  lineHeight: 1,
                  color: "var(--accent2)",
                }}
              >
                MERN
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  color: "var(--muted)",
                }}
              >
                + Python
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Stats */}
      <div
        ref={statsRef}
        style={{
          flex: "0 0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          animation: "slideLeft 0.7s 0.5s ease both",
        }}
      >
        {[
          { num: count.projects, suffix: "+", label: "Featured Projects", color: "var(--accent)" },
          { num: count.years, suffix: "+", label: "Years Coding", color: "var(--accent2)" },
          { num: count.tech, suffix: "+", label: "Technologies", color: "var(--accent3)" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "1.3rem 1.8rem",
              minWidth: 175,
              transition: "border-color 0.3s, transform 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(124,106,255,0.3)";
              e.currentTarget.style.transform = "translateX(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "2.1rem",
                fontWeight: 700,
                color: stat.color,
                lineHeight: 1,
                marginBottom: "0.3rem",
              }}
            >
              {stat.num}
              <span style={{ fontSize: "1.3rem" }}>{stat.suffix}</span>
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "var(--muted)",
                letterSpacing: "0.03em",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          animation: "fadeIn 1s 1.2s ease both",
          opacity: 0.5,
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            color: "var(--muted)",
          }}
        >
          scroll
        </div>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, var(--muted), transparent)",
            animation: "float 1.5s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 1100px) {
          section#home { flex-wrap: wrap; justify-content: center; }
        }
        @media (max-width: 768px) {
          section#home { flex-direction: column; align-items: center; text-align: center; padding-top: 6rem; }
        }
      `}</style>
    </section>
  );
}
