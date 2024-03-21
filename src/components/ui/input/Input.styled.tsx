import styled from 'styled-components';

export const BaseInputContainer = styled.div`
  background: #f5f6f7;
  border: 1px solid #dfe5ea;
  border-radius: 3px;
  padding: 11px 15px;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const BaseInput = styled.input`
  width: 100%;
  background: #f5f6f7;
  border: none;
  margin: 5px 0 0 0;
  padding: 0;

  font-size: 13px;
  color: #334144;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    opacity: 0.5;
  }
`;

export const BaseLabel = styled.label`
  font-size: 10px;
  line-height: 16px;
  color: #949ea0;
  text-align: left;
`;
