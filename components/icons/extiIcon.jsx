export default function ExitIcon({ color = "" }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8L20 12L16 16" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 12H20" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 20H5.7C5.51435 20 5.3363 19.9234 5.20503 19.787C5.07375 19.6506 5 19.4656 5 19.2727V4.72727C5 4.53439 5.07375 4.3494 5.20503 4.21301C5.3363 4.07662 5.51435 4 5.7 4H12" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
