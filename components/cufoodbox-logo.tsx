export function CUFoodBoxLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CUFoodBox Logo"
    >
      {/* House silhouette */}
      <path d="M24 4L4 20V44H18V32H30V44H44V20L24 4Z" fill="currentColor" className="text-primary" />
      {/* Food box inside house */}
      <rect
        x="14"
        y="22"
        width="20"
        height="14"
        rx="2"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary"
      />
      {/* Box flaps */}
      <path
        d="M14 24L24 28L34 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-primary"
      />
      {/* Heart on box */}
      <path
        d="M24 30C24 30 21 28 21 26.5C21 25.5 22 25 23 25.5C23.5 25.8 24 26.5 24 26.5C24 26.5 24.5 25.8 25 25.5C26 25 27 25.5 27 26.5C27 28 24 30 24 30Z"
        fill="hsl(348 52% 51%)"
      />
    </svg>
  )
}
