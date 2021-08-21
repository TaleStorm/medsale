// enum Order 
// {
//   ascending,
//   descending
// }

// export default function OrderIcon({
//   active = false,
//   activeColor = "currentColor",
//   disableColor = "#aeb2cc",
//   order = Order.ascending
// }) {
//   return (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path stroke={active && order === Order.ascending ? activeColor : disableColor}  d="M9.40625 6V17.2941M9.40625 6L7 8.47059M9.40625 6L11.8125 8.47059M15.5938"  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//       <path stroke={active && order === Order.descending ? activeColor : disableColor} d="M9.40625 8.47059M15.5938 18V6.70588M15.5938 18L13.1875 15.5294M15.5938 18L18 15.5294"  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   )
// }
