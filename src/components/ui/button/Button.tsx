import React, { ButtonHTMLAttributes, MouseEvent } from "react";
import "./Button.css";
import cn from "classnames";
import { StyledButton } from "./Button.styled";

export enum ButtonShape {
  Rounded = "rounded",
  Square = "square",
}

export enum ButtonVariant {
  Solid = "solid",
  Outlined = "outlined",
  Link = "link",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  color?: string;
}

export const Button = ({
  onClick,
  variant = ButtonVariant.Solid,
  shape = ButtonShape.Square,
  color,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      className={cn("Button", className)}
      onClick={onClick}
      {...props}
      data-testid="Button"
      shape={shape}
      variant={variant}
      color={color}
    >
      {children}
    </StyledButton>
  );
};
