import { useState } from "react";
import useIsMobile from "./components/useIsMobile";
import TitleBar from "./components/TitleBar";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

const FONT =
  "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif";

export default function App() {
  const [active, setActive] = useState("explore");
  const isMobile = useIsMobile();

  const content = {
    explore: <Hero setActive={setActive} />,
    projects: <Projects />,
    skills: <Skills />,
    about: <About />,
    contact: <Contact />,
  };

  if (isMobile) {
    return (
      <div
        style={{
          height: "100dvh",
          background: "#0a0a0c",
          display: "flex",
          flexDirection: "column",
          fontFamily: FONT,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: 50,
            flexShrink: 0,
            background: "#1c1c1e",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 13,
              color: "#8e8e93",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            Dinesh Sri Sai
          </span>
        </div>

        <main
          style={{
            flex: 1,
            overflowY: "auto",
            background: "#101012",
            padding: "24px 18px 96px",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {content[active]}
        </main>

        <BottomNav active={active} setActive={setActive} />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0c",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: FONT,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1080,
          height: "92vh",
          background: "#1c1c1e",
          borderRadius: 18,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.85), 0 4px 16px rgba(0,0,0,0.6)",
        }}
      >
        <TitleBar />
        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          <Sidebar active={active} setActive={setActive} />
          <main
            style={{
              flex: 1,
              overflowY: "auto",
              background: "#101012",
              padding: "32px 36px",
            }}
          >
            {content[active]}
          </main>
        </div>
      </div>
    </div>
  );
}
