import { Compass, FolderOpen, Layers, User, Mail } from "lucide-react";

const tabs = [
  { id: "explore", label: "Home", Icon: Compass },
  { id: "projects", label: "Projects", Icon: FolderOpen },
  { id: "skills", label: "Stack", Icon: Layers },
  { id: "about", label: "About", Icon: User },
  { id: "contact", label: "Contact", Icon: Mail },
];

export default function BottomNav({ active, setActive }) {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        // env(safe-area-inset-bottom) handles iPhone notch/home bar
        paddingBottom: "env(safe-area-inset-bottom, 8px)",
        background: "rgba(28, 28, 30, 0.94)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        paddingTop: 10,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        zIndex: 100,
      }}
    >
      {tabs.map(({ id, label ,Icon}) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => setActive(id)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px 10px 6px",
              color: isActive ? "#0071e3" : "#48484a",
              transition: "color 0.15s",
              minWidth: 48,
            }}
          >
            <Icon size={23} strokeWidth={isActive ? 2.2 : 1.5} />
            <span
              style={{
                fontSize: 10,
                fontWeight: isActive ? 600 : 400,
                letterSpacing: "0.01em",
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
