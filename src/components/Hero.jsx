import useIsMobile from "./useIsMobile";

export default function Hero({ setActive }) {
  const isMobile = useIsMobile();

  return (
    <div style={{ maxWidth: isMobile ? "100%" : 560 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: isMobile ? 20 : 32,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#28c840",
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: 12, color: "#8e8e93" }}>
          Available for opportunities
        </span>
      </div>

      <h1
        style={{
          fontSize: isMobile ? 32 : 46,
          fontWeight: 700,
          color: "#f5f5f7",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginBottom: 4,
        }}
      >
        Dinesh Sri Sai
      </h1>
      <h1
        style={{
          fontSize: isMobile ? 32 : 46,
          fontWeight: 700,
          color: "#3a3a3c",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginBottom: isMobile ? 16 : 24,
        }}
      >
        Rudrakshala
      </h1>

      <p
        style={{
          fontSize: isMobile ? 14 : 15,
          color: "#8e8e93",
          lineHeight: 1.75,
          maxWidth: 420,
          marginBottom: isMobile ? 24 : 32,
        }}
      >
        Engineer
      </p>

      <div
        style={{
          display: "flex",
          gap: 10,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <button
          onClick={() => setActive("projects")}
          style={{
            padding: isMobile ? "13px 20px" : "9px 20px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 500,
            background: "#0071e3",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            transition: "background 0.15s",
            width: isMobile ? "100%" : "auto",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#0077ed")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#0071e3")}
        >
          View Projects
        </button>
        <a
          href="https://mail.google.com/mail/?view=cm&to=dineshsrisai1@gmail.com"
          style={{
            padding: isMobile ? "13px 20px" : "9px 20px",
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 400,
            color: "#98989d",
            border: "1px solid rgba(255,255,255,0.1)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: isMobile ? "100%" : "auto",
            boxSizing: "border-box",
          }}
        >
          Say Hello
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: isMobile ? 8 : 12,
          marginTop: isMobile ? 28 : 48,
        }}
      >
        {[
          { val: "2", label: "Projects" },
          { val: "1", label: "Client" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#1c1c1e",
              borderRadius: 12,
              padding: isMobile ? "14px 10px" : "16px 18px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontSize: isMobile ? 20 : 24,
                fontWeight: 700,
                color: "#f5f5f7",
                marginBottom: 4,
              }}
            >
              {stat.val}
            </p>
            <p style={{ fontSize: isMobile ? 10 : 11, color: "#636366" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
