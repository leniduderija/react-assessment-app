import styled from 'styled-components';
import { Box } from '../ui/box/Box';
import { Avatar } from '../ui/avatar/Avatar';
import { ModalActionButton } from '../ui/modal/Modal.styled';
import { Modal } from '../ui/modal/Modal';

export const UserModalStyled = styled(Modal)`
  padding: 60px 110px;

  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const UserHeader = styled.div`
  display: flex;
  flex-direction: row;
  color: #334144;
  font-family: 'Ubuntu', sans-serif;
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: 20px;
  width: 80px;
  height: 80px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`;

export const TitleText = styled.p`
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  font-size: 25px;
  line-height: 35px;
`;

export const SubTitleText = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  color: #949ea0;
  text-align: left;
`;

export const BaseBox = styled(Box)`
  justify-content: flex-start;
  flex-direction: column;
  font-family: 'Ubuntu', sans-serif;
  margin-bottom: 31px;
`;

export const BaseText = styled.p`
  width: 100%;
  color: #334144;
  font-weight: 400;
  font-size: 18px;
  line-height: 13px;
  text-align: left;
`;

export const BaseTextLabel = styled.p`
  font-size: 10px;
  line-height: 16px;
  color: #949ea0;
  text-align: left;
  margin-bottom: 16px;
`;

export const UserModalActionButton = styled(ModalActionButton)`
  width: auto;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 18px 50px;
`;
