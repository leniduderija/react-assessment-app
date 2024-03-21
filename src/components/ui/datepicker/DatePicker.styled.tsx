import styled from 'styled-components';
import { Box } from '../box/Box';
import ReactDatePicker from 'react-date-picker';

export const BaseBox = styled(Box)`
  background: #f5f6f7;
  border: 1px solid #dfe5ea;
  border-radius: 3px;
  padding: 11px 15px;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const BaseTextLabel = styled.p`
  font-size: 10px;
  line-height: 16px;
  color: #949ea0;
  text-align: left;
`;

export const BaseReactDatePicker = styled(ReactDatePicker)`
  width: 100%;
  background: #f5f6f7;
  border: none;
  margin: 5px 0 0 0;
  padding: 0;

  font-size: 13px;
  color: #334144;

  text-align: left;

  & .react-date-picker__wrapper {
    border: none;
  }
  & select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }
  & .react-date-picker__inputGroup__divider {
    padding: 0;
  }
`;
