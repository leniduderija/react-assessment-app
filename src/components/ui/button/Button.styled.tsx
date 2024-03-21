import styled, { css } from 'styled-components';
import { ButtonShape, ButtonVariant } from './Button';

export const StyledButton = styled.button<{
  shape?: ButtonShape;
  variant?: ButtonVariant;
  color?: string;
}>`
  padding: 12px 22px;
  border-radius: ${(props) =>
    props.shape === ButtonShape.Square ? '3px' : '50px'};
  color: ${(props) => props.color ?? '#fff'};
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  transition: all 0.1s;
  cursor: pointer;

  ${(props) =>
    props.variant === ButtonVariant.Link &&
    css`
      background: transparent;
      box-shadow: none;
      border: none;
      &:hover {
        background: transparent;
      }

      @media (max-width: 767px) {
        padding: 12px 0;
      }
    `}

  ${(props) =>
    props.variant === ButtonVariant.Solid &&
    css`
      background: linear-gradient(270deg, #ecbcb3 0%, #eaa79e 100%);
      box-shadow: 0px 15px 20px rgba(234, 168, 159, 0.2);
      border: none;

      @media (min-width: 768px) {
        &:hover {
          background: #ffffff;
          box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
          color: #df9186;
        }
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
