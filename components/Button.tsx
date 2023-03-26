import React, { ReactNode, MouseEventHandler } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className = "", onClick }: Props) => {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
