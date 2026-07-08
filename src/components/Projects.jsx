import { ExternalLink, Github } from "lucide-react";
import TrafficLights from "./TrafficLights";
import useIsMobile from "./useIsMobile";

const projects = [
  {
    title: "Dev Tinder",
    subtitle: "Developer Networking App",
    description:
      "Match, and connect with other developers. Real-time chat powered by Socket.io. Deployed on Vercel & Render.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Vercel", "Render"],
    statusDot: "#febc2e",
    status: "Soon",
    github: "https://github.com/dineshsrisai/devTinder",
    live: "https://devtinder.in",
    glow: "rgba(99, 102, 241, 0.25)",
    glowBorder: "rgba(99, 102, 241, 0.4)",
  },
  {
    title: "UmaShankar Printers",
    subtitle: "Freelance — Local Business Site",
    description:
      "Full website for a local printing & solutions business in Palakol. REST API, MongoDB Atlas, Vercel , Render.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
    statusDot: "#28c840",
    status: "Freelance",
    github: "https://github.com/dineshsrisai/umaShankar",
    live: "https://umashankar-pff8.vercel.app",
    glow: "rgba(99, 102, 241, 0.25)",
    glowBorder: "rgba(99, 102, 241, 0.4)",
  },
];

export default function Projects() {
  const isMobile = useIsMobile();

  return (
    <div>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#636366",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        Projects
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 14,
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, isMobile }) {
  const handleEnter = (e) => {
    e.currentTarget.style.boxShadow = `0 0 0 1px ${project.glowBorder}, 0 0 55px 8px ${project.glow}, 0 8px 30px rgba(0,0,0,0.5)`;
    e.currentTarget.style.transform = "translateY(-2px)";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        background: "#1c1c1e",
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        transition: "box-shadow 0.3s ease, transform 0.25s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          background: "#2c2c2e",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {isMobile ? (
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: project.statusDot,
              boxShadow: `0 0 5px ${project.statusDot}`,
            }}
          />
        ) : (
          <TrafficLights />
        )}
        <span
          style={{
            fontSize: 11,
            color: "#8e8e93",
            fontWeight: 500,
            flex: 1,
            textAlign: "center",
          }}
        >
          {project.title}
        </span>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#8e8e93",
              display: "flex",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d1d1d6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8e8e93")}
          >
            <Github size={14} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#8e8e93",
              display: "flex",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d1d1d6")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8e8e93")}
          >
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div style={{ padding: "16px 16px 18px" }}>
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: project.statusDot,
                boxShadow: `0 0 6px ${project.statusDot}`,
              }}
            />
            <span style={{ fontSize: 11, color: "#8e8e93" }}>
              {project.status}
            </span>
          </div>
        )}
        <p
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#f5f5f7",
            marginBottom: 2,
          }}
        >
          {project.title}
        </p>
        <p style={{ fontSize: 11, color: "#8e8e93", marginBottom: 10 }}>
          {project.subtitle}
        </p>
        <p
          style={{
            fontSize: 13,
            color: "#aeaeb2",
            lineHeight: 1.7,
            marginBottom: 14,
          }}
        >
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 11,
                color: "#98989d",
                background: "#2c2c2e",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "3px 9px",
                borderRadius: 6,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
