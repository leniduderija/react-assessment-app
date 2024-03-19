import "./Modal.css";
import cn from "classnames";
import { AllHTMLAttributes } from "react";
import {
  BaseModal,
  CloseIcon,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./Modal.styled";

export interface ModalProps extends AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  onClose: () => void;
  title?: string;
}

export const Modal = ({ onClose, title, className, children }: ModalProps) => {
  return (
    <BaseModal className={cn("Modal", className)} data-testid="Modal">
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <ModalHeader>
          {title && <ModalTitle>{title}</ModalTitle>}
          <CloseIcon onClick={onClose}>
            <img src="/images/icon-close.png" alt="Close Modal" />{" "}
          </CloseIcon>
        </ModalHeader>
        {children}
      </ModalContent>
    </BaseModal>
  );
};
