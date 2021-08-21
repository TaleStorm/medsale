import H3 from "./textStyles/H3"

function ListItem({
  active= false,
  children,
  className=""
}) {
  return (<div className={`${className} h-13 py-4 px-9 duration-300 ${active ? "bg-cool-gray-ligth inset-left-bar-shaddow": "hover:bg-cool-gray-ligth"}`}>
      {children}
  </div>)
}

export default ListItem