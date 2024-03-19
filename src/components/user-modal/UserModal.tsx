import React from "react";
import { Modal, ModalProps } from "../ui";
import { ModalBody } from "../ui/modal/Modal.styled";
import { UserForm } from "./UserForm";
import { UserDto } from "../../core/domain/user/user";

interface UserModalProps extends ModalProps {
  user: UserDto | null;
}

export const UserModal = ({ user, onClose }: UserModalProps) => {
  const handleLogout = () => console.log("LOGOUT");

  return (
    <Modal onClose={onClose} title="Welcome Back">
      <ModalBody>
        {user && <UserForm user={user} onLogout={handleLogout} />}
      </ModalBody>
    </Modal>
  );
};
