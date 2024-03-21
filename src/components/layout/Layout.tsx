import React, { AllHTMLAttributes } from 'react';
import './Layout.css';
import cn from 'classnames';
import { Header } from './header/Header';
import { Container } from '../ui/container/Container';
import styled from 'styled-components';

interface LayoutProps extends AllHTMLAttributes<HTMLDivElement> {}

const StyledMain = styled.main`
  padding: 20px 0;
  position: relative;
`;

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <>
      <div className={cn('Layout', className)} data-testid="Layout">
        <Header />
        <StyledMain className="Main">
          <Container>{children}</Container>
        </StyledMain>
      </div>
    </>
  );
};
