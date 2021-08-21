import H4 from "../textStyles/H4"

const Button = (
  {
    children,
    onClick = () => { },
    color = "action-cyan",
    textColor = "white",
    className = "",
  }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} text-h2-mobile  focus:outline-none focus:ring  text-center text-${textColor} bg-${color} p-3 duration-300 rounded-lg hover:shadow-inner-fading`}
    >
        {children}
    </button>
  )
}

export default Button