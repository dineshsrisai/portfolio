import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import TrafficLights from "./TrafficLights";
import useIsMobile from "./useIsMobile";

const links = [
  {
    label: "E-Mail",
    detail: "dineshsrisai1@gmail.com",
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&to=dineshsrisai1@gmail.com",
    external: true,
  },
  {
    label: "GitHub",
    detail: "github.com/dineshsrisai",
    icon: Github,
    href: "https://github.com/dineshsrisai",
    external: true,
  },
  {
    label: "LinkedIn",
    detail: "linkedin.com/in/dineshsrisai",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dineshsrisai/",
    external: true,
  },
];

export default function Contact() {
  const isMobile = useIsMobile();

  return (
    <div style={{ maxWidth: isMobile ? "100%" : 480 }}>
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
        Connect
      </p>

      <p
        style={{
          fontSize: isMobile ? 28 : 32,
          fontWeight: 700,
          color: "#f5f5f7",
          letterSpacing: "-0.025em",
          lineHeight: 1.2,
          marginBottom: isMobile ? 20 : 24,
        }}
      >
        Let's build
        <br />
        something.
      </p>

      <div
        style={{
          background: "#1c1c1e",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.07)",
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
              connect
            </span>
          </div>
        )}

        {links.map((link, i) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: isMobile ? "16px 16px" : "14px 16px",
                borderTop: i > 0 ? "1px solid rgba(255,255,255,0.04)" : "none",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "#2c2c2e",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8e8e93",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#f5f5f7",
                      marginBottom: 1,
                    }}
                  >
                    {link.label}
                  </p>
                  <p style={{ fontSize: 11, color: "#8e8e93" }}>
                    {link.detail}
                  </p>
                </div>
              </div>
              <ArrowUpRight size={16} color="#636366" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
