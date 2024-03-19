import React, { useCallback, useState } from "react";
import { Modal, ModalProps } from "../ui";
import {
  ModalActionButton,
  ModalBody,
  ModalFooter,
} from "../ui/modal/Modal.styled";
import { RegistrationForm } from "./RegistrationForm";
import { UserRegistrationDto } from "../../core/domain/user/user";
import { emailValidation, passwordValidation } from "../../utils/utils";
import { userService } from "../../core/domain/user/user.service";
import { useBoolean } from "../../utils/hooks/useBoolean";
import { ErrorText } from "../ui/error-text/ErrorText.styled";
import { Box } from "../ui/box/Box";
import { SuccessText } from "../ui/success-text/SuccessText.styled";

interface RegistrationModalProps extends ModalProps {
  onSuccessClose: () => void;
}

const ERROR_TEXT =
  "There was something wrong with creating your account. Try again.";

export const RegistrationModal = ({
  onClose,
  onSuccessClose,
}: RegistrationModalProps) => {
  const [formData, setFormData] = useState<UserRegistrationDto | null>(null);
  const [errors, setErrors] = useState<UserRegistrationDto | null>();

  const [isSubmitting, setIsSubmitting] = useBoolean(false);
  const [isError, setIsError] = useBoolean(false);
  const [errorText, setErrorText] = useState(ERROR_TEXT);
  const [isSuccess, setIsSuccess] = useBoolean(false);

  const handleChange = (field: string, value: string | Date) => {
    setFormData({
      ...(formData as UserRegistrationDto),
      [field]: value,
    });
  };

  const validate = useCallback(() => {
    const formFields = { ...formData };
    const formErrors: UserRegistrationDto | {} = {};
    let formIsValid = true;

    //Name
    if (!formFields["first_name"]) {
      formIsValid = false;
      (formErrors as UserRegistrationDto)["first_name"] =
        "First name is required";
    }

    // Last name
    if (!formFields["last_name"]) {
      formIsValid = false;
      (formErrors as UserRegistrationDto)["last_name"] =
        "Last name is required";
    }

    //Date of birth
    if (!formFields["date_of_birth"]) {
      formIsValid = false;
      (formErrors as UserRegistrationDto)["date_of_birth"] =
        "Date of birth is required";
    }

    //Email
    if (!formFields["email"]) {
      formIsValid = false;
      (formErrors as UserRegistrationDto)["email"] = "Email is required";
    }

    if (typeof formFields["email"] !== "undefined") {
      const validEmail = emailValidation(formFields["email"]);

      if (!validEmail) {
        formIsValid = false;
        (formErrors as UserRegistrationDto)["email"] = "Email is not valid";
      }
    }

    //Password
    if (!formFields["password"]) {
      formIsValid = false;
      (formErrors as UserRegistrationDto)["password"] = "Password is required";
    }

    if (typeof formFields["password"] !== "undefined") {
      const validPassword = passwordValidation(formFields["password"]);
      if (!validPassword) {
        formIsValid = false;
        (formErrors as UserRegistrationDto)["password"] =
          "Password is not valid";
      }
    }

    if (Object.keys(formErrors).length !== 0) {
      setErrors(formErrors as UserRegistrationDto);
    }

    return formIsValid;
  }, [formData]);

  const userSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("data ", formData);
      setIsSubmitting.on();
      await userService
        .userRegistration(formData as UserRegistrationDto)
        .then(() => setIsSuccess.on())
        .catch((error) => {
          setIsError.on();
          setErrorText(error.error);
          console.error("Error fetching data", error);
        })
        .finally(setIsSubmitting.off);
    }
  };

  return (
    <Modal onClose={onClose} title="Create an Account">
      <ModalBody>
        {isSuccess ? (
          <>
            <Box>
              <SuccessText>
                Congratulations! You have successfully signed up for FlowrSpot!
              </SuccessText>
            </Box>
            <ModalFooter>
              <ModalActionButton onClick={onSuccessClose}>OK</ModalActionButton>
            </ModalFooter>
          </>
        ) : (
          <RegistrationForm
            values={formData}
            onChange={handleChange}
            onSubmit={userSubmit}
            errors={errors}
            submitting={isSubmitting}
          />
        )}
        {isError && <ErrorText>{errorText}</ErrorText>}
      </ModalBody>
    </Modal>
  );
};
