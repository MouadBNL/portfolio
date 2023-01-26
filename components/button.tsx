import { ReactElement } from "react";

interface ButtonProps  {
  children: ReactElement
}

const Button = ({children}: ButtonProps) => {
  return (
    <button className="text-white font-medium bg-primary py-3 px-9 rounded text-lg hover:bg-gr-900 hover:text-primary-500 border border-primary transition">
      {children}
    </button>
  )
}

export default Button;