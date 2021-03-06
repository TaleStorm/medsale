export default function DownloadIcon({ color = "" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 5.94118H10.5714V1H5.42857V5.94118H2L8 11.7059L14 5.94118ZM7.14286 7.58824V2.64706H8.85714V7.58824H9.86L8 9.37529L6.14 7.58824H7.14286ZM2 13.3529H14V15H2V13.3529Z" fill={color || "currentColor"} />
    </svg>
  )
}
