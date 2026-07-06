// Custom icon: lucide-react has no "mound of mulch" icon, so this is a
// hand-drawn SVG (mound outline + a few texture flecks) matching lucide's
// stroke style (24x24 viewBox, round caps/joins).
export default function MulchMoundIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 19c1-6 5-10 9-10s8 4 9 10" />
      <path d="M3 19h18" />
      <path d="M8 14.5l1.2-1.2" />
      <path d="M12.2 12l1.2-1.2" />
      <path d="M15.6 14.5l1.2-1.2" />
    </svg>
  )
}
