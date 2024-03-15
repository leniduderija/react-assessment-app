import React, { InputHTMLAttributes } from "react";
import "./Input.css";
import cn from "classnames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({ onChange, className, placeholder }: InputProps) => {
  return (
    <input
      className={cn("Input", className)}
      type="text"
      onChange={onChange}
      placeholder={placeholder}
      data-testid="Input"
    />
  );
};
