import { useContext } from "react"
import HeaderContext from "../context/headerContex"
import AddIcon from "../icons/addIcon"
import BellIcon from "../icons/bellIcon"
import ExitIcon from "../icons/extiIcon"
import PersonIcon from "../icons/personIcon"
import Button from "../inputs/button"
import Dropdown from "../inputs/dropdown/dropdown"
import DropdonwItem from "../inputs/dropdown/dropdownItem"
import H1 from "../textStyles/H1"
import H4 from "../textStyles/H4"

const Header = () => {

    const { currentHeading } = useContext(HeaderContext)

    return (
        <div className="flex justify-between w-full items-center">
            <H1>
                {currentHeading}
            </H1>
            <div className="flex">
                <Button className="flex px-4 py-3 justify-center w-auto mr-2">
                    <div className="flex items-center">
                        <div className="mr-2">
                            <AddIcon />
                        </div>
                        <H4>
                            Создать новое направление
                        </H4>
                    </div>
                </Button>
                <div className="bg-white rounded-lg mr-2 w-12 h-12 flex justify-center items-center">
                    <BellIcon />
                </div>
                <Dropdown>
                    <div onClick={()=>{console.log("Lol")}} className="h-full w-full flex items-center">
                        <div className="mr-3">
                            <PersonIcon />
                        </div>
                        <H4 className="mr-3">
                            Константин
                        </H4>

                    </div>
                    <div className="h-full w-full flex items-center">
                        <div className="mr-3">
                            <ExitIcon/>
                        </div>
                        <H4 className="mr-3">
                            Выйти
                        </H4>
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header