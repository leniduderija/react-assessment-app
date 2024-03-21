import React from 'react';
import { ModalFooter } from '../ui/modal/Modal.styled';
import { UserDto } from '../../core/domain/user/user';
import {
  BaseBox,
  BaseText,
  BaseTextLabel,
  UserModalActionButton,
} from './UserModal.styled';

interface UserFormProps {
  user: UserDto;
  onLogout: () => void;
}

const TextBox = ({ label, value }: { label: string; value?: string }) => (
  <BaseBox>
    <BaseTextLabel>{label}</BaseTextLabel>
    <BaseText data-testid="TextBox">{value}</BaseText>
  </BaseBox>
);

export const UserForm = ({ user, onLogout }: UserFormProps) => {
  return (
    <>
      <TextBox label="First Name" value={user.first_name} />
      <TextBox label="Last Name" value={user.last_name} />
      {/* TODO: Check why do we have date of birth in design but API doesn't returns that field on /me endpoint */}
      <TextBox label="Date of Birth" value={user.date_of_birth || '-'} />
      {/* TODO: Check why do we have email in design but API doesn't returns that field on /me endpoint */}
      <TextBox label="Email" value={user.email || '-'} />
      <ModalFooter>
        <UserModalActionButton onClick={onLogout}>Logout</UserModalActionButton>
      </ModalFooter>
    </>
  );
};
