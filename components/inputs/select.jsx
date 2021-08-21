import { Listbox, Menu, Transition } from "@headlessui/react"
import { Fragment, MouseEventHandler, MutableRefObject, useEffect, useRef, useState } from "react"
import Divider from "../divider"
import ArrowDownIcon from "../icons/arrowDownIcon"
import EyeIcon from "../icons/eyeIcon"
import SheetIcon from "../icons/sheetIcon"
import WarningIcon from "../icons/warningIcon"
import validator from "./validator"

const sub = validator

// export interface SelectProps {
//   label: string,
//   name: string,
//   options?: Array<string>,
//   placeholder?: string,
//   disabled?: boolean,
//   error?: boolean,
//   setError?: Function,
//   errorMessage?: string,
//   onBlur?: Function,
//   onChange: (arg: string) => void,
//   required?: boolean,
//   className?: string,
// }

const Mock = [
  "МРТ левого колена",
  "МРТ правого колена",
  "МРТ позвоночника 1 отдел",
  "МРТ позвоночника 2 отдел",
  "МРТ позвоночника 3 отдел",
  "МРТ левого плеча",
  "МРТ левого плеча",
  "МРТ левого плеча",
  "МРТ левого плеча",
  "МРТ левого плеча",
  "МРТ левого плеча",
  "МРТ левого плеча",
]


export default function Select({
  label,
  options = Mock,
  name,
  disabled = false,
  placeholder = "",
  error = false,
  setError = () => { },
  errorMessage = "Ошибка!",
  required = false,
  onChange,
  className="",
}) {

  const [inputState, setInputState] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const inputRef = useRef() 
  const selectRef = useRef() 
  const optionsRef = useRef() 


  useEffect(() => {
    var event = new CustomEvent("refreshDropdown");
    window.dispatchEvent(event)
  }, [error])


  useEffect(() => {
    window.addEventListener("click", clickAwayHandler)

    return (() => {
      window.removeEventListener("click", clickAwayHandler)
    })
  }, [])

  function clickAwayHandler(e) {
    if (!isInside(e.clientX, e.clientY)) 
      setOpen(false)
  }


  const isInside = (x, y) => {
    const selectRect = selectRef.current?.getBoundingClientRect()
    const optionsRect = optionsRef.current?.getBoundingClientRect()

    return inRect(x, y, selectRect) || inRect(x, y, optionsRect)
  }

  const inRect = (x, y, rect) => {
    if (rect === undefined)
      return false

    return x >= rect.x && x <= rect.right && y >= rect.y && y <= rect.bottom
  }

  const selectItem = (e, item) => {
    e.preventDefault()
    e.stopPropagation()

    setInputState(item)
    setSelected(item)
    onChange(item)

    setIsActive(true)
    setOpen(false)
  }

  const fillterValues = (values) => {

    const filters = inputState.toLowerCase().split(" ")

    return values.filter(item => {
      let passedFilters = 0

      filters.forEach((filter) => {
        if (item.toLowerCase().includes(filter.toLowerCase()))
          passedFilters++
      })

      return passedFilters === filters.length
    })
  }

  return (
    <label
      ref={selectRef}
      className={`${className} block w-full relative ${error ? "text-error" : "focus-within:text-action-cyan"} transition-all duration-200 ease-out`}>
      {label}
      <div onClick={(e) => { setOpen(true) }} className={`flex justify-between items-center border-2 rounded-lg px-4 py-3 mt-2 focus-within:outline-none bg-popupBackground w-full text-ui-text ${error ? "border-error bg-error-ligth"
        : isActive ? "border-action-cyan bg-input-focus focus-within:text-black"
          : "focus-within:border-action-cyan hover:border-action-cyan border-popupBorder focus-within:bg-input-focus border-not-active text-not-active focus-within:text-black"} leading-snug  transition-all duration-200 ease-out flex`}>
        <input
          autoComplete="off"
          type="text"
          name={name}
          onClick={() => { inputRef.current.select() }}
          className="bg-transparent outline-none w-full"
          placeholder={placeholder}
          disabled={disabled}
          value={inputState}
          onChange={(e) => {
            setInputState(e.target.value)
            setIsActive(e.target.value.length > 0)
          }}
          ref={inputRef}
          required={required}
        />
        <ArrowDownIcon />
      </div>
      {open &&
        <div ref={optionsRef} className="absolute rounded-lg styled-scroll overflow-y-auto max-h-60 styled-scroll  transform translate-y-3 bg-white shadow-select z-10 text-black w-full">
          {fillterValues(options).map((item, index) => {
            return (
              <>
                <div onClick={(e) => selectItem(e, item)} className={`${item === selected ? "font-medium" : ""} px-4 py-3 cursor-pointer hover:bg-input-focus h-12`}>
                  {item}
                </div>
                {index < Mock.length - 1 && <Divider />}
              </>)
          })}
        </div>
      }
      <div className={`flex items-center mt-1 ${!error && "hidden"}`}>
        <div className={`mr-1`}>
          <WarningIcon />
        </div>
        <div className={`text-error text-sm`}>{errorMessage}</div>
      </div>
    </label>
  )
}