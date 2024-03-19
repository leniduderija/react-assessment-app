import styled, { css } from "styled-components";
import { ButtonShape, ButtonVariant } from "./Button";

export const StyledButton = styled.button<{
  shape?: ButtonShape;
  variant?: ButtonVariant;
  color?: string;
}>`
  padding: 12px 22px;
  border-radius: ${(props) =>
    props.shape === ButtonShape.Square ? "3px" : "50px"};
  color: ${(props) => props.color ?? "#fff"};
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  transition: all 0.1s;

  ${(props) =>
    props.variant === ButtonVariant.Link &&
    css`
      background: transparent;
      box-shadow: none;
      border: none;
      &:hover {
        background: transparent;
      }
    `}

  ${(props) =>
    props.variant === ButtonVariant.Solid &&
    css`
      background: linear-gradient(270deg, #ecbcb3 0%, #eaa79e 100%);
      box-shadow: 0px 15px 20px rgba(234, 168, 159, 0.2);
      border: none;
      &:hover {
        background: linear-gradient(270deg, #eaa79e 0%, #eaa79e 100%);
      }
    `}

  ${(props) =>
    props.variant === ButtonVariant.Outlined &&
    css`
      background: #ffffff;
      border: 1px solid rgba(234, 168, 159, 0.2);
      box-shadow: 0px 15px 20px rgba(234, 168, 159, 0.2);
    `}
`;
