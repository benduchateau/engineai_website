export default function Logo({
  size = 24,
  color = "currentColor",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-label="Engine AI logo"
    >
      <rect x="6" y="8" width="40" height="13" rx="2" fill={color} />
      <rect x="10" y="26" width="40" height="13" rx="2" fill={color} opacity="0.6" />
      <rect x="14" y="44" width="40" height="13" rx="2" fill={color} opacity="0.3" />
    </svg>
  );
}
