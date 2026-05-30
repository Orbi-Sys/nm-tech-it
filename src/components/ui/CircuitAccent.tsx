export function CircuitAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 24"
      className={`text-white/20 ${className}`}
      aria-hidden
    >
      <line x1="0" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1" />
      <circle cx="22" cy="6" r="2" fill="currentColor" />
      <line x1="0" y1="12" x2="28" y2="12" stroke="currentColor" strokeWidth="1" />
      <circle cx="30" cy="12" r="2" fill="currentColor" />
      <line x1="0" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth="1" />
      <circle cx="18" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}
