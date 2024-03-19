import styled from "styled-components";

export const Box = styled.input`
  background: #f5f6f7;
  border: 1px solid #dfe5ea;
  border-radius: 3px;

  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-size: 13px;
  line-height: 13px;
  color: #334144;

  &::placeholder {
    font-size: 10px;
    line-height: 10px;
    color: #949ea0;
  }
`;

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
  padding: 5px 0;

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
