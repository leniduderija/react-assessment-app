import React, { AllHTMLAttributes } from "react";
import "./Footer.css";
import cn from "classnames";

interface FooterProps extends AllHTMLAttributes<HTMLDivElement> {}
export const Footer = ({ children, className, onClick }: FooterProps) => {
  return (
    <footer className={cn("Footer", className)} data-testid="Footer">
      FOOTER
    </footer>
  );
};
