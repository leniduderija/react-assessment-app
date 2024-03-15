import React, { AllHTMLAttributes } from "react";
import "./Card.css";
import cn from "classnames";

interface CardProps extends AllHTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}
export const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <div className={cn("Card", className)} onClick={onClick} data-testid="Card">
      {children}
    </div>
  );
};
