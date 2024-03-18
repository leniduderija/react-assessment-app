import React, { AllHTMLAttributes } from "react";
import "./Container.css";
import cn from "classnames";

interface ContainerProps extends AllHTMLAttributes<HTMLDivElement> {}
export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("Container", className)} data-testid="Container">
      {children}
    </div>
  );
};
