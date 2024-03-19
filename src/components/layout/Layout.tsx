import React, { AllHTMLAttributes } from "react";
import "./Layout.css";
import cn from "classnames";
import { Header } from "./header/Header";
import { Container } from "../ui/container/Container";
import styled from "styled-components";

interface LayoutProps extends AllHTMLAttributes<HTMLDivElement> {}

const StyledMain = styled.main`
  padding: 20px 0;
`;

export const Layout = ({ children, className }: LayoutProps) => {
  const handleLogin = () => console.log("handle login");
  const handleRegistration = () => console.log("handle registration");
  return (
    <>
      <div className={cn("Layout", className)} data-testid="Layout">
        <Header onLogin={handleLogin} onRegistration={handleRegistration} />
        <StyledMain>
          <Container>{children}</Container>
        </StyledMain>
      </div>
    </>
  );
};
