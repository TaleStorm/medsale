import { MutableRefObject, useEffect, useRef, useState } from "react"
import NumberFormat from "react-number-format"
import EyeIcon from "../icons/eyeIcon"
import WarningIcon from "../icons/warningIcon"
import validator from "./validator"

export interface InputProps {
    label: string,
    name: string,
    type?: string,
    placeholder?: string,
    disabled?: boolean,
    state: string,
    validator?: Function,
    error?: boolean,
    setError?: Function,
    setState: Function,
    errorMessage?: string,
    onBlur?: Function,
    required?: boolean,
    formateSymbol?: string,
    format?: string,
    mask?: string,
}

const sub = validator
const TextInput = ({
    label,
    name,
    disabled,
    type = "text",
    placeholder = "",
    state, setState,
    validator = sub.true,
    error = false,
    setError = () => { },
    errorMessage = "Ошибка!",
    required,
    formateSymbol = "#",
    format = "",
    mask = "_"
}: InputProps) => {

    const [realType, setRealType] = useState(type)
    const [isActive, setIsActive] = useState(false)
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>

    useEffect(() => {
        var event = new CustomEvent("refreshDropdown");
        window.dispatchEvent(event)
    }, [error])

    return (
        <label className={`block w-full relative ${error ? "text-error" : "focus-within:text-action-cyan"} transition-all duration-200 ease-out`}>
            {label}
            <div className={`flex  justify-between items-center border-2 rounded-lg px-4 py-3 mt-2 focus-within:outline-none bg-popupBackground w-full text-ui-text ${error ? "border-error bg-error-ligth"
                : isActive ? "border-action-cyan bg-input-focus focus-within:text-black"
                    : "focus-within:border-action-cyan hover:border-action-cyan border-popupBorder focus-within:bg-input-focus border-not-active text-not-active focus-within:text-black"} leading-snug  transition-all duration-200 ease-out flex`}>
                {type === "number" ?
                    <NumberFormat
                        value={state}
                        onChange={(e) => {
                            setState(e.target.value)
                            setError(!validator(e.target.value))
                            setIsActive(e.target.value.length > 0)
                        }}
                        className="outline-none bg-transparent"
                        format={format}
                        mask={mask}
                        placeholder={placeholder} />
                    : <input
                        type={realType}
                        name={name}
                        className="bg-transparent outline-none w-full"
                        placeholder={placeholder}
                        disabled={disabled}
                        value={state}
                        onChange={(e) => {
                            setState(e.target.value)
                            setError(!validator(e.target.value))
                            setIsActive(e.target.value.length > 0)
                        }}
                        ref={inputRef}
                        required={required}
                    />}
                <div className={` flex-shrink-0  cursor-pointer ${type !== "password" && "hidden"}`} onMouseDown={() => {
                    setRealType("text")
                }}
                    onTouchStart={() => {
                        setRealType("text")
                    }}
                    onMouseUp={() => {
                        setRealType(type)
                    }}
                    onTouchEnd={() => {
                        setRealType(type)
                    }}
                >
                    <EyeIcon />
                </div>
            </div>

            <div className={`flex items-center mt-1 ${!error && "hidden"}`}>
                <div className={`mr-1`}>
                    <WarningIcon />
                </div>
                <div className={`text-error text-sm`}>{errorMessage}</div>
            </div>
        </label>
    )
}

export default TextInput