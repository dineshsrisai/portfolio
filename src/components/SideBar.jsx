import {
  Compass,
  FolderOpen,
  Layers,
  User,
  Mail,
  Github,
  Linkedin,
  FileText,
} from "lucide-react";

const navGroups = [
  {
    title: "FAVORITES",
    items: [
      { id: "explore", label: "Explore", icon: Compass },
      { id: "projects", label: "Projects", icon: FolderOpen },
      { id: "skills", label: "Stack", icon: Layers },
      { id: "about", label: "About", icon: User },
      { id: "contact", label: "Contact", icon: Mail },
    ],
  },
];

const externalLinks = [
  { label: "GitHub", icon: Github, href: "https://github.com/dineshsrisai" },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dineshsrisai/",
  },
  { label: "Resume", icon: FileText, href: "#" },
];

export default function Sidebar({ active, setActive }) {
  return (
    <aside
      className="flex flex-col py-2 shrink-0 overflow-y-auto"
      style={{
        width: 200,
        background: "#1c1c1e",
        borderRight: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {navGroups.map((group) => (
        <div key={group.title} className="mb-1">
          <p
            className="px-4 py-1.5 font-semibold uppercase tracking-wider"
            style={{ fontSize: 10, color: "#48484a", letterSpacing: "0.09em" }}
          >
            {group.title}
          </p>

          {group.items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="flex items-center gap-2.5 w-full text-left rounded-lg transition-all duration-150 mx-1.5 my-px"
                style={{
                  width: "calc(100% - 12px)",
                  padding: "6px 10px",
                  fontSize: 13,
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "#ffffff" : "#98989d",
                  background: isActive ? "#0071e3" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "transparent";
                }}
              >
                <Icon size={14} strokeWidth={isActive ? 2 : 1.5} />
                {item.label}
              </button>
            );
          })}
        </div>
      ))}

      <div
        className="my-2 mx-3"
        style={{ height: 1, background: "rgba(255,255,255,0.05)" }}
      />

      <div>
        <p
          className="px-4 py-1.5 font-semibold uppercase tracking-wider"
          style={{ fontSize: 10, color: "#48484a", letterSpacing: "0.09em" }}
        >
          QUICK LINKS
        </p>

        {externalLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 rounded-lg transition-colors mx-1.5 my-px"
              style={{
                width: "calc(100% - 12px)",
                padding: "6px 10px",
                fontSize: 13,
                color: "#636366",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.color = "#98989d";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#636366";
              }}
            >
              <Icon size={14} strokeWidth={1.5} />
              {link.label}
            </a>
          );
        })}
      </div>

      <div
        className="mt-auto mx-3 pt-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-2.5 px-1 py-1">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold text-white shrink-0"
            style={{ background: "#0071e3", fontSize: 11 }}
          >
            D
          </div>
          <div className="min-w-0">
            <p style={{ fontSize: 12, fontWeight: 500, color: "#f5f5f7" }}>
              Dinesh Sri Sai
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
