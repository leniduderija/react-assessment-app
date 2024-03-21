import React, { ChangeEvent } from 'react';
import { Input } from '../ui/input/Input';
import { Box } from '../ui/box/Box';
import styled from 'styled-components';
import { ModalActionButton, ModalFooter } from '../ui/modal/Modal.styled';
import { ErrorText } from '../ui/error-text/ErrorText.styled';
import { LoginDto } from '../../core/domain/auth/auth';

interface RegistrationFormProps {
  onChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors?: LoginDto | null;
  submitting?: boolean;
}

export const FullWidthBox = styled(Box)`
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginForm = ({
  onChange,
  onSubmit,
  errors,
  submitting,
}: RegistrationFormProps) => {
  const onFieldChange = (field: string, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(field, value);
  };

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <FullWidthBox>
        <Input
          onChange={(e) => onFieldChange('email', e)}
          label="Email Address"
          inputName="email"
          placeholder="e.g. john.doe@gmail.com"
          required
        />
        {errors?.email && <ErrorText>{errors?.email}</ErrorText>}
      </FullWidthBox>
      <FullWidthBox>
        <Input
          onChange={(e) => onFieldChange('password', e)}
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
          {submitting ? 'Logging in...' : 'Login to your Account'}
        </ModalActionButton>
      </ModalFooter>
    </Form>
  );
};
