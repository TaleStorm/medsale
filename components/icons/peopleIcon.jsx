export default function PeopleIcon({ color = "" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 11.75C4.66 11.75 0 12.92 0 15.25V17H14V15.25C14 12.92 9.34 11.75 7 11.75ZM2.34 15C3.18 14.42 5.21 13.75 7 13.75C8.79 13.75 10.82 14.42 11.66 15H2.34ZM7 10C8.93 10 10.5 8.43 10.5 6.5C10.5 4.57 8.93 3 7 3C5.07 3 3.5 4.57 3.5 6.5C3.5 8.43 5.07 10 7 10ZM7 5C7.83 5 8.5 5.67 8.5 6.5C8.5 7.33 7.83 8 7 8C6.17 8 5.5 7.33 5.5 6.5C5.5 5.67 6.17 5 7 5ZM14.04 11.81C15.2 12.65 16 13.77 16 15.25V17H20V15.25C20 13.23 16.5 12.08 14.04 11.81ZM13 10C14.93 10 16.5 8.43 16.5 6.5C16.5 4.57 14.93 3 13 3C12.46 3 11.96 3.13 11.5 3.35C12.13 4.24 12.5 5.33 12.5 6.5C12.5 7.67 12.13 8.76 11.5 9.65C11.96 9.87 12.46 10 13 10Z" fill={color || "currentColor"} />
    </svg>
  )
}