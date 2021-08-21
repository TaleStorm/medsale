const Divider = ({height = 1, width = "full", color="cool-gray-ligth"}) => {
  return (
      <div style={{height:height}} className={`w-${width} bg-${color}`}>

      </div>
  )
}

export default Divider