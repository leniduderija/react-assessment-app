import styled from 'styled-components';
import { ModalContent, ModalOverlay } from '../ui/modal/Modal.styled';
import { Modal } from '../ui/modal/Modal';

export const MobileMenuModalStyled = styled(Modal)`
  position: absolute;

  ${ModalOverlay} {
    display: none;
  }

  ${ModalContent} {
    width: 100%;
    height: 100%;
  }
`;
