import TrafficLights from "./TrafficLights";

export default function TitleBar() {
  return (
    <div
      className="relative h-11 flex items-center px-4 shrink-0"
      style={{
        background: "#2c2c2e",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="absolute left-4">
        <TrafficLights />
      </div>

      <div className="w-full text-center pointer-events-none">
        <span
          style={{
            fontSize: "12px",
            color: "#636366",
            fontWeight: 500,
            letterSpacing: "0.01em",
          }}
        >
          Dinesh Sri Sai
        </span>
      </div>
    </div>
  );
}
