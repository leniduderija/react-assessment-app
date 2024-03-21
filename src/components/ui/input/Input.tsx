import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import { BaseInput, BaseInputContainer, BaseLabel } from './Input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  inputName: string;
}
export const Input = ({
  onChange,
  className,
  placeholder,
  label,
  inputName,
  ...props
}: InputProps) => {
  return (
    <BaseInputContainer>
      <BaseLabel htmlFor={inputName}>{label}</BaseLabel>
      <BaseInput
        className={cn('Input', className)}
        name={inputName}
        onChange={onChange}
        placeholder={placeholder}
        data-testid="Input"
        {...props}
      />
    </BaseInputContainer>
  );
};
