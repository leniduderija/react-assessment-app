import React from "react";
import "./Header.css";
import cn from "classnames";
import { Container } from "../../ui/container/Container";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navigation } from "../navigation/Navigation";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  color: #949ea0;
  background-color: #fff;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface HeaderProps {
  onLogin: () => void;
  onRegistration: () => void;
  className?: string;
}
export const Header = ({ onLogin, onRegistration, className }: HeaderProps) => {
  return (
    <StyledHeader className={cn("Header", className)} data-testid="Header">
      <StyledContainer>
        <Link to="/">
          <img src="/images/logo.png" alt="FlowrSpot logo" />
        </Link>
        <Navigation onLogin={onLogin} onRegistration={onRegistration} />
      </StyledContainer>
    </StyledHeader>
  );
};
