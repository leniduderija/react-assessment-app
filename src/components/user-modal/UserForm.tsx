import React from "react";
import { Input } from "../ui";
import { Box } from "../ui/box/Box";
import styled from "styled-components";
import { ModalActionButton, ModalFooter } from "../ui/modal/Modal.styled";
import { UserDto } from "../../core/domain/user/user";

interface UserFormProps {
  user: UserDto;
  onLogout: () => void;
}

export const FullWidthBox = styled(Box)`
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const UserForm = ({ user, onLogout }: UserFormProps) => {
  return (
    <>
      <FullWidthBox>
        <Input
          onChange={() => console.log("change")}
          label="First Name"
          inputName="first_name"
          value={user.first_name}
        />
      </FullWidthBox>
      <FullWidthBox>
        <Input
          onChange={() => console.log("change")}
          label="Last Name"
          inputName="last_name"
          value={user.last_name}
        />
      </FullWidthBox>
      {/* TODO: Check why do we have date of birth in design but API doesn't returns that field on /me endpoint */}
      {/*<FullWidthBox>*/}
      {/*  <Input*/}
      {/*    onChange={() => console.log("change")}*/}
      {/*    label="Date of Birth"*/}
      {/*    value={user.date_of_birth}*/}
      {/*  />*/}
      {/*</FullWidthBox>*/}
      {/* TODO: Check why do we have email in design but API doesn't returns that field on /me endpoint */}
      {/*<FullWidthBox>*/}
      {/*  <Input*/}
      {/*    onChange={() => console.log("change")}*/}
      {/*    label="Email"*/}
      {/*    value={user.email}*/}
      {/*  />*/}
      {/*</FullWidthBox>*/}
      <ModalFooter>
        <ModalActionButton onClick={onLogout}>Logout</ModalActionButton>
      </ModalFooter>
    </>
  );
};
