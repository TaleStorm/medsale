import { Children, useState } from "react";
import Divider from "../../divider";
import ArrowDownIcon from "../../icons/arrowDownIcon";
import PersonIcon from "../../icons/personIcon";
import H4 from "../../textStyles/H4";
import DropdonwItem from "./dropdownItem";


export default function Dropdown(
  {
    children,
    startIndex = 0,
  }
) {
  const childrens = Children.toArray(children)

  const [activeItem, setActiveItem] = useState(startIndex)

  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white relative px-4 py-3 rounded-lg cursor-pointer">
      <div onClick={(e) => setOpen(!open)} className="h-full w-full flex">
        {childrens[activeItem]}
        <div className={`duration-300 flex items-center transform rotate-${open ? "0" : "180"}`}>
          <ArrowDownIcon />
        </div>
      </div>
      <div className={`shadow-lg duration-300 ${open ? "h-min" : "h-0"} w-full overflow-y-auto transf transform translate-y-4 rounded-lg bg-white absolute left-0`}>
        <div className="overflow-y-auto max-h-60 mr-1">
          {childrens.map((item, index) => {
            return (
              <>
                <div onClick={() => { setOpen(false); setActiveItem(index) }} className="px-4 py-3 duration-300 hover:bg-cool-gray-ligth">
                  {item}
                </div>
                {index < childrens.length - 1 && <Divider />}
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}