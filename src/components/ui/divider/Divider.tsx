import "./Divider.css";
import cn from "classnames";

interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => {
  return <div className={cn("Divider", className)} data-testid="Divider" />;
};
