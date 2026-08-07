import { ExternalLink, Github } from "lucide-react";
import TrafficLights from "./TrafficLights";
import useIsMobile from "./useIsMobile";

const CARD_GLOW = "rgba(99, 102, 241, 0.25)";
const CARD_GLOW_BORDER = "rgba(99, 102, 241, 0.4)";

const STATUS_COLORS = {
  building: "#febc2e",
  live: "#28c840",
  indigo: "#5e5ce6",
  purple: "#af52de",
  teal: "#30b0c7",
};

const projects = [
  {
    title: "DevConnect",
    subtitle: "Developer Networking Platform",
    description:
      "Match and connect with other developers, then chat in real time over Socket.io. Deployed on Vercel & Render.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Vercel", "Render"],
    statusDot: STATUS_COLORS.building,
    status: "In Progress",
    github: "https://github.com/dineshsrisai/devTinder",
    live: "https://devtinder.in",
  },
  {
    title: "UmaShankar Printers",
    subtitle: "Freelance — Full-Stack Business Site",
    description:
      "Service site for a local printing & solutions business — a custom Tailwind design, one shared MongoDB schema across service types, and shimmer loading states to smooth over Render's cold starts.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "Vercel",
      "Render",
    ],
    statusDot: STATUS_COLORS.live,
    status: "Freelance — Live",
    github: "https://github.com/dineshsrisai/umaShankar",
    live: "https://umashankarprints.vercel.app/",
  },
  {
    title: "Connect Four",
    subtitle: "Player vs AI",
    description:
      "C++ implementation of Connect Four with multiplayer support and a Minimax AI using heuristic evaluation for intelligent gameplay and tactical decision-making",
    tech: ["C++"],
    statusDot: STATUS_COLORS.purple,
    status: "View on GitHub",
    github: "https://github.com/dineshsrisai/connectFour",
    live: null,
  },
  {
    title: "Tic Tac Toe",
    subtitle: "2-Player Console Game",
    description:
      "Classic 3x3 grid game with win, draw, and turn logic — built to practice core C++ control flow and array handling.",
    tech: ["C++"],
    statusDot: STATUS_COLORS.purple,
    status: "View on GitHub",
    github: "https://github.com/dineshsrisai/TicTacToe",
    live: null,
  },
  {
    title: "Rock Paper Scissors",
    subtitle: "Player vs Computer",
    description:
      "Round-based game against a randomized computer opponent, with running score tracking across rounds.",
    tech: ["C++"],
    statusDot: STATUS_COLORS.purple,
    status: "View on GitHub",
    github: "https://github.com/dineshsrisai/RockPaperScissors",
    live: null,
  },
  {
    title: "Snake and Ladders",
    subtitle: "Dice-Based Board Game",
    description:
      "A Snake and Ladders game built using C++ featuring dice rolls, player movement, snake and ladder mechanics, and win detection.",
    tech: ["C++"],
    statusDot: STATUS_COLORS.purple,
    status: "View on GitHub",
    github: "https://github.com/dineshsrisai/SnakeandLadders",
    live: null,
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
    e.currentTarget.style.boxShadow = `0 0 0 1px ${CARD_GLOW_BORDER}, 0 0 55px 8px ${CARD_GLOW}, 0 8px 30px rgba(0,0,0,0.5)`;
    e.currentTarget.style.transform = "translateY(-2px)";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    e.currentTarget.style.transform = "translateY(0)";
  };
  const hasLiveDemo = Boolean(project.live) && project.live !== project.github;

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
            aria-hidden="true"
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
            aria-label={`View ${project.title} source on GitHub`}
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
          {hasLiveDemo && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} live site`}
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
          )}
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
              aria-hidden="true"
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
