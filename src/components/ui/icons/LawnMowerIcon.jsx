// Custom icon: lucide-react has no lawn mower icon, so this is a hand-drawn
// SVG matching lucide's stroke style (24x24 viewBox, round caps/joins) so it
// sits visually consistent next to the lucide icons used elsewhere.
export default function LawnMowerIcon({ className = 'w-6 h-6' }) {
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
      <circle cx="6.5" cy="18" r="2" />
      <circle cx="16.5" cy="18" r="2" />
      <path d="M6.5 18h6l2-6h4.5" />
      <path d="M12 12V8h3l1.5 2.5" />
      <path d="M14.5 12l3.5-2" />
      <path d="M18 10l3-3" />
      <path d="M19.2 5.2h2.8" />
    </svg>
  )
}
