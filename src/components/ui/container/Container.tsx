import React, { AllHTMLAttributes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

interface ContainerProps extends AllHTMLAttributes<HTMLDivElement> {}

const StyledContainer = styled.div`
  width: 1180px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1180px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <StyledContainer
      className={cn('Container', className)}
      data-testid="Container"
    >
      {children}
    </StyledContainer>
  );
};
