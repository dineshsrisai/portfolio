import useIsMobile from "./useIsMobile";

const stack = [
  {
    cat: "Frontend",
    items: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    dot: "#0071e3",
  },
  {
    cat: "Backend",
    items: ["Node.js", "Express", "Socket.io", "REST APIs"],
    dot: "#30d158",
  },
  { cat: "Database", items: ["MongoDB", "Mongoose"], dot: "#ff9f0a" },
  { cat: "Deployment", items: ["Vercel", "Render"], dot: "#ff453a" },
  {
    cat: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code"],
    dot: "#bf5af2",
  },
];

export default function Skills() {
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
        Stack
      </p>

      <div
        style={{
          background: "#1c1c1e",
          borderRadius: 14,
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        {stack.map((group, i) => (
          <div
            key={group.cat}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "flex-start",
              gap: isMobile ? 8 : 20,
              padding: isMobile ? "12px 16px" : "14px 20px",
              borderTop: i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                width: isMobile ? "auto" : 110,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: group.dot,
                  flexShrink: 0,
                  boxShadow: `0 0 5px ${group.dot}`,
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  color: "#8e8e93",
                  letterSpacing: "0.05em",
                }}
              >
                {group.cat}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: isMobile ? 6 : 7,
              }}
            >
              {group.items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: isMobile ? 12 : 12.5,
                    color: "#d1d1d6",
                    background: "#2c2c2e",
                    border: "1px solid rgba(255,255,255,0.09)",
                    padding: isMobile ? "3px 10px" : "4px 12px",
                    borderRadius: 7,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
