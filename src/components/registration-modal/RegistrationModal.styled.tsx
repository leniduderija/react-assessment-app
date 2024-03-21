import styled from 'styled-components';
import { Box } from '../ui/box/Box';

export const ContainerBox = styled(Box)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const FullWidthBox = styled(Box)`
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const HalfWidthBox = styled(Box)`
  width: 185px;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 49%;
  }

  @media (max-width: 420px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
