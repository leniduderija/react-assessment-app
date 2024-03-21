import React from 'react';
import { Input } from '../ui/input/Input';
import { ModalActionButton, ModalFooter } from '../ui/modal/Modal.styled';
import { RegistrationDto } from '../../core/domain/auth/auth';
import { ErrorText } from '../ui/error-text/ErrorText.styled';
import {
  ContainerBox,
  Form,
  FullWidthBox,
  HalfWidthBox,
} from './RegistrationModal.styled';
import { DatePickerWithLabel } from '../ui/datepicker/DatePicker';

interface RegistrationFormProps {
  values: RegistrationDto | null;
  onChange: (field: string, value: string | Date) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors?: RegistrationDto | null;
  submitting?: boolean;
}

const defaultDateString = '1988-01-01';
const defaultDate = new Date(defaultDateString);

export const RegistrationForm = ({
  values,
  onChange,
  onSubmit,
  errors,
  submitting,
}: RegistrationFormProps) => {
  const onFieldChange = (field: string, value: string | Date) =>
    onChange(field, value);

  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <ContainerBox>
        <HalfWidthBox>
          <Input
            value={values?.first_name}
            onChange={(e) => onFieldChange('first_name', e.target.value)}
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
            onChange={(e) => onFieldChange('last_name', e.target.value)}
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
        <DatePickerWithLabel
          onChange={(date) => onFieldChange('date_of_birth', date as Date)}
          value={values?.date_of_birth || defaultDate}
          label="Date of Birth"
          required
        />
        {errors?.date_of_birth && (
          <ErrorText>{errors?.date_of_birth as string}</ErrorText>
        )}
      </FullWidthBox>
      <FullWidthBox>
        <Input
          value={values?.email}
          onChange={(e) => onFieldChange('email', e.target.value)}
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
          onChange={(e) => onFieldChange('password', e.target.value)}
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
          {submitting ? 'Submitting...' : 'Create Account'}
        </ModalActionButton>
      </ModalFooter>
    </Form>
  );
};
