import styled from 'styled-components';
import { Button } from '../button/Button';

export const BaseModal = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 767px) {
    position: absolute;
  }
`;

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.48);

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ModalContent = styled.div`
  width: 440px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  padding: 30px;

  z-index: 2;
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  color: #334144;
  text-align: center;

  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
  align-items: flex-start;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  & img {
    width: 100%;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ModalBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ModalTitle = styled.p`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
`;

export const ModalActionButton = styled(Button)`
  font-family: Ubuntu, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0px;
  text-align: center;
  width: 100%;
`;
