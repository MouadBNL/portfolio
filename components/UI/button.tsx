import { MouseEventHandler, ReactElement, useEffect } from "react"

interface ButtonProps {
  children: ReactElement
  WFull?: boolean
  onClick?: MouseEventHandler<any>
  loading?: boolean
  ariaLabel?: string
}

const Button = ({
  children,
  WFull,
  onClick,
  loading,
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel ?? "button"}
      onClick={onClick ?? (() => {})}
      className={`text-white font-medium bg-primary py-3 px-9 rounded text-lg ${
        loading
          ? "bg-gr-500 hover:bg-gr-600 border-gr-400"
          : "hover:text-primary-500 border border-primary hover:bg-gr-900"
      } transition ${WFull ? "w-full" : ""}`}
    >
      {children}
    </button>
  )
}

export default Button
