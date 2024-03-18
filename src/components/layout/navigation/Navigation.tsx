import React from "react";
import cn from "classnames";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, ButtonShape, ButtonVariant } from "../../ui";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  font-family: "Montserrat", sans-serif;
`;

const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  & a {
    padding: 12px 22px;
    color: #949ea0;
    text-decoration: none;
  }
`;

interface NavigationProps {
  onLogin: () => void;
  onRegistration: () => void;
  className?: string;
}
export const Navigation = ({
  onLogin,
  onRegistration,
  className,
}: NavigationProps) => {
  return (
    <Nav className={cn("Navigation", className)} data-testid="Navigation">
      <List>
        <NavItem>
          <Link to="/flowers">Flowers</Link>
        </NavItem>
        <NavItem>
          <Link to="/latest-sightings">Latest Sightings</Link>
        </NavItem>
        <NavItem>
          <Link to="/favorites">Favorites</Link>
        </NavItem>
        <NavItem>
          <Button
            variant={ButtonVariant.Link}
            color="#DF9186"
            onClick={onLogin}
          >
            Login
          </Button>
        </NavItem>
        <NavItem>
          <Button
            variant={ButtonVariant.Solid}
            shape={ButtonShape.Rounded}
            onClick={onRegistration}
          >
            New Account
          </Button>
        </NavItem>
      </List>
    </Nav>
  );
};
