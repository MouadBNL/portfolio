import { ReactElement, useEffect } from "react";

interface ButtonProps {
  children: ReactElement;
  WFull?: boolean;
}

const Button = ({ children, WFull }: ButtonProps) => {
  return (
    <button className={`text-white font-medium bg-primary py-3 px-9 rounded text-lg hover:bg-gr-900 hover:text-primary-500 border border-primary transition ${WFull ? 'w-full' : ''}`}>
      {children}
    </button>
  );
};

export default Button;
