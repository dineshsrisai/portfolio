export default function SectionHeader({ num, label }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-[11px] text-[#252525] font-mono tabular-nums">{num}</span>
      <span className="text-[11px] text-white uppercase tracking-[0.18em]">{label}</span>
      <div className="flex-1 h-px bg-[#1a1a1a]" />
    </div>
  )
}