import React, { ButtonHTMLAttributes, MouseEvent } from "react";
import "./Button.css";
import cn from "classnames";

enum ButtonShape {
  Rounded = "rounded",
  Square = "square",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: any;
  shape?: any;
}

export const Button = ({
  onClick,
  type = "",
  shape = ButtonShape.Square,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn("Button", className)}
      onClick={onClick}
      {...props}
      data-testid="Button"
    >
      {children}
    </button>
  );
};
