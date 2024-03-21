import cn from 'classnames';
import { AllHTMLAttributes, ReactNode } from 'react';
import {
  BaseModal,
  CloseIcon,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from './Modal.styled';

export interface ModalProps extends AllHTMLAttributes<HTMLDivElement> {
  className?: string;
  onClose: () => void;
  header?: string | ReactNode;
  showCloseIcon?: boolean;
}

export const Modal = ({
  onClose,
  header,
  showCloseIcon = true,
  className,
  children,
}: ModalProps) => {
  return (
    <BaseModal className={cn('Modal', className)} data-testid="Modal">
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <ModalHeader>
          {header && typeof header === 'string' ? (
            <ModalTitle>{header}</ModalTitle>
          ) : (
            header
          )}
          {showCloseIcon && (
            <CloseIcon onClick={onClose}>
              <img src="/images/icon-close.png" alt="Close Modal" />{' '}
            </CloseIcon>
          )}
        </ModalHeader>
        {children}
      </ModalContent>
    </BaseModal>
  );
};
