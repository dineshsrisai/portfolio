import TrafficLights from "./TrafficLights";
import useIsMobile from "./useIsMobile";

const facts = [
  { label: "Location", val: "Andhra Pradesh" },
  { label: "Education", val: "CS Undergrad" },
  { label: "Freelance", val: "1 real client" },
  { label: "Status", val: "Open to work" },
];

export default function About() {
  const isMobile = useIsMobile();

  return (
    <div style={{ maxWidth: isMobile ? "100%" : 560 }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#8e8e93",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        About Me
      </p>

      <div
        style={{
          background: "#1c1c1e",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.07)",
          marginBottom: 12,
        }}
      >
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              background: "#2c2c2e",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <TrafficLights />
            <span
              style={{
                fontSize: 11,
                color: "#8e8e93",
                fontWeight: 500,
                marginLeft: 4,
              }}
            >
              about.md
            </span>
          </div>
        )}

        <div style={{ padding: isMobile ? "16px" : "20px" }}>
          <p
            style={{
              fontSize: isMobile ? 14 : 13.5,
              color: "#8e8e93",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Passionate Engineer Interested in Problem Solving and Building
            Websites
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            marginTop: isMobile ? 16 : 0,
          }}
        >
          {[
            { val: "2", label: "Projects" },
            { val: "1", label: "Client" },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "14px 0",
                textAlign: "center",
                borderRight:
                  i < 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? 18 : 20,
                  fontWeight: 700,
                  color: "#f5f5f7",
                }}
              >
                {s.val}
              </p>
              <p style={{ fontSize: 10, color: "#636366", marginTop: 2 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#1c1c1e",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {facts.map((item, i) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: isMobile ? "12px 16px" : "12px 18px",
              borderTop: i > 0 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: "#636366",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {item.label}
            </span>
            <span style={{ fontSize: isMobile ? 13 : 12, color: "#98989d" }}>
              {item.val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
