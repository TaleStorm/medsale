import Divider from "../divider"
import Button from "../inputs/button"
import ListItem from "../listItem"
import H2 from "../textStyles/H2"
import H3 from "../textStyles/H3"
import H4 from "../textStyles/H4"
import H6 from "../textStyles/H6"
import { useRouter } from 'next/router'
import BellIcon from "../icons/bellIcon"
import AddIcon from "../icons/addIcon"
import DownloadFunction from "../icons/downloadIcon"
import GraphIcon from "../icons/graphIcon"
import PeopleIcon from "../icons/peopleIcon"
import SheetIcon from "../icons/sheetIcon"
import MoneyIcon from "../icons/moneyIcon"
import OrderIcon from "../icons/orderIcon"
import PersonIcon from "../icons/personIcon"
import { useContext } from "react"
import HeaderContext from "../context/headerContex"

const Sidebar = () => {

  const { setCurrentHeading } = useContext(HeaderContext)

  const router = useRouter()

  const spaceDigits = (value) => {
    return `${value}`
      .split("")
      .reverse()
      .reduce((prev, current, index) => `${current}${index % 3 === 0 ? " " : ""}${prev}`)
  }

  const numberToDay = (value) => {
    const lastDigit = value % 10

    if (lastDigit === 1) return value + " дeнь"
    if (lastDigit > 1 && lastDigit < 5) return value + " дня"
    return value + "дней"
  }

  const pages = [
    {
      icon: <PeopleIcon />,
      name: "Главная",
      link: "/",
    },
    {
      icon: <SheetIcon />,
      name: "Продукты",
      link: "/products",
    }
  ]

  return (
    <div style={{ width: 246, gridTemplateRows: "repeat(4, min-content) 1fr" }} className="h-full grid grid-flow-row auto-rows-max min-h-full bg-white">
      <div className="bg-white" style={{ height: "4.5rem" }}>
        <div className="flex items-center p-4">
          <img src="/icons/medx.png" />
          <p className="font-medium ml-2 text-warm-gray">
            MedSale
        </p>
        </div>
      </div>
      <Divider />
      <div className="bg-white h-full pt-2">
        {pages.map(item => {
          let isActive = router.pathname === item.link

          if (isActive)
            setCurrentHeading(item.name)

          return (
            <ListItem
              key={item.name}
              active={isActive}
              className={isActive ? "text-action-cyan" : "text-warm-gray"}
            >
              <a href={item.link} className="flex w-full h-full">
                <div className="mr-4">
                  {item.icon}
                </div>
                <H3 className={isActive ? "font-bold" : ""}>
                  {item.name}
                </H3>
              </a>
            </ListItem>)
        }
        )
        }
      </div>
    </div >
  )
}

export default Sidebar