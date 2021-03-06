export default function SheetIcon({ color = "" }) {
  const pathColor = color || "currentColor"
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 3V17H3V3H17ZM17 1H3C1.9 1 1 1.9 1 3V17C1 18.1 1.9 19 3 19H17C18.1 19 19 18.1 19 17V3C19 1.9 18.1 1 17 1Z" fill={pathColor} />
      <path d="M12 15H5V13H12V15ZM15 11H5V9H15V11ZM15 7H5V5H15V7Z" fill={pathColor} />
    </svg>

  )
}
