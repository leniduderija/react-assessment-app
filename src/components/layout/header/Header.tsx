import React from 'react';
import cn from 'classnames';
import { Navigation } from '../navigation/Navigation';
import { Logo, StyledContainer, StyledHeader } from './Header.styled';

interface HeaderProps {
  className?: string;
}
export const Header = ({ className }: HeaderProps) => {
  return (
    <StyledHeader className={cn('Header', className)} data-testid="Header">
      <StyledContainer>
        <Logo to="/">
          <img src="/images/logo.png" alt="ReactAssessmentApp logo" />
        </Logo>
        <Navigation />
      </StyledContainer>
    </StyledHeader>
  );
};
