import "./Modal.css";
import cn from "classnames";

interface ModalProps {
  className?: string;
}

export const Modal = ({ className }: ModalProps) => {
  return <div className={cn("Modal", className)} data-testid="Modal" />;
};
