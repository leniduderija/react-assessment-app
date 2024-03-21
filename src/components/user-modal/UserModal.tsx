import React from 'react';
import { ModalBody } from '../ui/modal/Modal.styled';
import { UserForm } from './UserForm';
import { useAuth } from '../../core/auth/AuthProvider';
import {
  StyledAvatar,
  SubTitleText,
  Title,
  TitleText,
  UserHeader,
  UserModalStyled,
} from './UserModal.styled';
import { ModalProps } from '../ui/modal/Modal';

interface UserModalProps extends ModalProps {}

export const UserModal = ({ onClose }: UserModalProps) => {
  const { logout, user } = useAuth();
  const handleLogout = () => logout().then(onClose);

  return (
    <UserModalStyled
      onClose={onClose}
      header={
        <UserHeader>
          <StyledAvatar image={user?.avatar || ''} />
          <Title>
            <TitleText>
              {user!.first_name} {user!.last_name}
            </TitleText>
            <SubTitleText>
              {user?.sightings.length}{' '}
              {user?.sightings.length === 1 ? 'sighting' : 'sightings'}
            </SubTitleText>
          </Title>
        </UserHeader>
      }
    >
      <ModalBody>
        {user && <UserForm user={user} onLogout={handleLogout} />}
      </ModalBody>
    </UserModalStyled>
  );
};
