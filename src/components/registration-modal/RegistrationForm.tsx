import React from "react";
import { Input } from "../ui";
import { Box } from "../ui/box/Box";
import styled from "styled-components";
import { ModalActionButton, ModalFooter } from "../ui/modal/Modal.styled";
import { UserRegistrationDto } from "../../core/domain/user/user";
import { ErrorText } from "../ui/error-text/ErrorText.styled";

interface RegistrationFormProps {
  values: UserRegistrationDto | null;
  onChange: (field: string, value: string | Date) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors?: UserRegistrationDto | null;
  submitting?: boolean;
}

export const ContainerBox = styled(Box)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const FullWidthBox = styled(Box)`
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const HalfWidthBox = styled(Box)`
  width: 185px;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RegistrationForm = ({
  values,
  onChange,
  onSubmit,
  errors,
  submitting,
}: RegistrationFormProps) => {
  const onFieldChange = (field: string, value: string | Date) =>
    onChange(field, value);

  // const date = values?.date_of_birth
  //   ? new Date(values?.date_of_birth)
  //   : new Date();

  // const dateFormatted = date.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "short",
  //   day: "2-digit",
  // });

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <ContainerBox>
        <HalfWidthBox>
          <Input
            value={values?.first_name}
            onChange={(e) => onFieldChange("first_name", e.target.value)}
            label="First Name"
            inputName="first_name"
            placeholder="e.g. John"
            type="text"
            required
          />
          {errors?.first_name && <ErrorText>{errors?.first_name}</ErrorText>}
        </HalfWidthBox>
        <HalfWidthBox>
          <Input
            value={values?.last_name}
            onChange={(e) => onFieldChange("last_name", e.target.value)}
            label="Last Name"
            inputName="last_name"
            placeholder="e.g. Doe"
            type="text"
            required
          />
          {errors?.last_name && <ErrorText>{errors?.last_name}</ErrorText>}
        </HalfWidthBox>
      </ContainerBox>
      <FullWidthBox>
        <Input
          onChange={(e) => onFieldChange("date_of_birth", e.target.value)}
          label="Date of Birth"
          inputName="date_of_birth"
          placeholder="e.g. 21 May, 1988"
          type="date"
          required
        />
        {errors?.date_of_birth && (
          <ErrorText>{errors?.date_of_birth as string}</ErrorText>
        )}
      </FullWidthBox>
      <FullWidthBox>
        <Input
          value={values?.email}
          onChange={(e) => onFieldChange("email", e.target.value)}
          label="Email Address"
          inputName="email"
          placeholder="e.g. john.doe@gmail.com"
          type="email"
          required
        />
        {errors?.email && <ErrorText>{errors?.email}</ErrorText>}
      </FullWidthBox>
      <FullWidthBox>
        <Input
          value={values?.password}
          onChange={(e) => onFieldChange("password", e.target.value)}
          label="Password"
          inputName="password"
          type="password"
          placeholder="Min 6 characters"
          required
        />
        {errors?.password && <ErrorText>{errors?.password}</ErrorText>}
      </FullWidthBox>
      <ModalFooter>
        <ModalActionButton type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Create Account"}
        </ModalActionButton>
      </ModalFooter>
    </Form>
  );
};
