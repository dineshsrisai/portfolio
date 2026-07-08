export default function TrafficLights() {
  return (
    <div className="flex items-center gap-[6px] group/tl">
      <div className="relative w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 cursor-pointer hover:brightness-90 transition-all">
        <span
          className="absolute inset-0 flex items-center justify-center text-[#7f1915] opacity-0 group-hover/tl:opacity-100 transition-opacity"
          style={{ fontSize: "9px", fontWeight: 900, lineHeight: 1 }}
        >
          ×
        </span>
      </div>

      <div className="relative w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 cursor-pointer hover:brightness-90 transition-all">
        <span
          className="absolute inset-0 flex items-center justify-center text-[#7a5b00] opacity-0 group-hover/tl:opacity-100 transition-opacity"
          style={{ fontSize: "9px", fontWeight: 900, lineHeight: 1 }}
        >
          −
        </span>
      </div>

      <div className="relative w-3 h-3 rounded-full bg-[#28c840] border border-black/10 cursor-pointer hover:brightness-90 transition-all">
        <span
          className="absolute inset-0 flex items-center justify-center text-[#0a5c1b] opacity-0 group-hover/tl:opacity-100 transition-opacity"
          style={{ fontSize: "7px", fontWeight: 900, lineHeight: 1 }}
        >
          ⤢
        </span>
      </div>
    </div>
  );
}
