import React, { useCallback, useState } from 'react';
import { Modal, ModalProps } from '../ui/modal/Modal';
import {
  ModalActionButton,
  ModalBody,
  ModalFooter,
} from '../ui/modal/Modal.styled';
import { LoginForm } from './LoginForm';
import { emailValidation, passwordValidation } from '../../utils/utils';
import { useBoolean } from '../../utils/hooks/useBoolean';
import { ErrorText } from '../ui/error-text/ErrorText.styled';
import { Box } from '../ui/box/Box';
import { SuccessText } from '../ui/success-text/SuccessText.styled';
import styled from 'styled-components';
import { LoginDto } from '../../core/domain/auth/auth';
import { useAuth } from '../../core/auth/AuthProvider';

interface LoginModalProps extends ModalProps {
  onSuccessClose: () => void;
}

export const ModalActionButtonWithMargin = styled(ModalActionButton)`
  margin-left: 10px;
`;

const ERROR_TEXT =
  'There was something wrong with logging to your account. Check your username and password and try again.';

export const LoginModal = ({ onClose, onSuccessClose }: LoginModalProps) => {
  const [formData, setFormData] = useState<LoginDto | null>(null);
  const [errors, setErrors] = useState<LoginDto | null>();

  const [isSubmitting, setIsSubmitting] = useBoolean(false);
  const [isError, setIsError] = useBoolean(false);
  const [errorText, setErrorText] = useState(ERROR_TEXT);
  const [isSuccess, setIsSuccess] = useBoolean(false);

  const { login } = useAuth();

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...(formData as LoginDto),
      [field]: value,
    });
  };

  const validate = useCallback(() => {
    const formFields = { ...formData };
    const formErrors: LoginDto | {} = {};
    let formIsValid = true;

    //Email
    if (!formFields['email']) {
      formIsValid = false;
      (formErrors as LoginDto)['email'] = 'Email is required';
    }

    if (typeof formFields['email'] !== 'undefined') {
      const validEmail = emailValidation(formFields['email']);

      if (!validEmail) {
        formIsValid = false;
        (formErrors as LoginDto)['email'] = 'Email is not valid';
      }
    }

    //Password
    if (!formFields['password']) {
      formIsValid = false;
      (formErrors as LoginDto)['password'] = 'Password is required';
    }

    if (typeof formFields['password'] !== 'undefined') {
      const validPassword = passwordValidation(formFields['password']);
      if (!validPassword) {
        formIsValid = false;
        (formErrors as LoginDto)['password'] = 'Password is not valid';
      }
    }

    if (Object.keys(formErrors).length !== 0) {
      setErrors(formErrors as LoginDto);
    }

    return formIsValid;
  }, [formData]);

  const userSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting.on();
      login(formData as LoginDto)
        .then(() => setIsSuccess.on())
        .catch((error) => {
          setIsError.on();
          setErrorText(error.error);
          console.error('Error fetching data', error);
        })
        .finally(setIsSubmitting.off);
    }
  };

  return (
    <>
      <Modal onClose={onClose} header="Welcome Back">
        <ModalBody>
          {isSuccess ? (
            <>
              <Box>
                <SuccessText>
                  Congratulations! You have successfully signed up for
                  ReactAssessmentApp!
                </SuccessText>
              </Box>
              <ModalFooter>
                <ModalActionButton onClick={onClose}>OK</ModalActionButton>
                <ModalActionButtonWithMargin onClick={onSuccessClose}>
                  PROFILE
                </ModalActionButtonWithMargin>
              </ModalFooter>
            </>
          ) : (
            <LoginForm
              onChange={handleChange}
              onSubmit={userSubmit}
              errors={errors}
              submitting={isSubmitting}
            />
          )}

          {isError && <ErrorText>{errorText}</ErrorText>}
        </ModalBody>
      </Modal>
    </>
  );
};
