import { useState, useEffect } from "react";

const links = [
  { label: "Work", id: "projects" },
  { label: "Stack", id: "skills" },
  { label: "About", id: "about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 border-b border-[#181818]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white font-black text-xl tracking-tight hover:text-[#999] transition-colors"
        >
          dinesh
        </button>

        {/* nav */}
        <nav className="flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm text-[#444] hover:text-white transition-colors"
            >
              {l.label}
            </button>
          ))}

          <a
            href="mailto:dineshsrisai1@gmail.com"
            className="text-sm px-4 py-1.5 rounded-full border border-white/15 text-white hover:bg-white hover:text-black transition-all duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
