import { Container } from '../../ui/container/Container';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  color: #949ea0;
  background-color: #fff;

  @media (max-width: 767px) {
    padding: 25px 0;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;
