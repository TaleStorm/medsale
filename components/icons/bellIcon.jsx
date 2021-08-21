export default function BellIcon({color = ""}) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C13.1 22 14 21.1231 14 20.0513H10C10 21.1231 10.9 22 12 22ZM18 16.1538V11.2821C18 8.29077 16.37 5.78667 13.5 5.1241V4.46154C13.5 3.65282 12.83 3 12 3C11.17 3 10.5 3.65282 10.5 4.46154V5.1241C7.64 5.78667 6 8.28103 6 11.2821V16.1538L4 18.1026V19.0769H20V18.1026L18 16.1538ZM16 17.1282H8V11.2821C8 8.86564 9.51 6.89744 12 6.89744C14.49 6.89744 16 8.86564 16 11.2821V17.1282Z" fill={color || "currentColor"}/>
    </svg>
  )
}
