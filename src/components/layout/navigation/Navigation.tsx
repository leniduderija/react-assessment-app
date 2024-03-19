import React from "react";
import cn from "classnames";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, ButtonShape, ButtonVariant } from "../../ui";
import { useDisclosure } from "../../../utils/hooks/useDisclosure";
import { createPortal } from "react-dom";
import { RegistrationModal } from "../../registration-modal/RegistrationModal";
import { LoginModal } from "../../login-modal/LoginModal";
import { UserModal } from "../../user-modal/UserModal";

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
  const { isOpen: showLoginModal, toggle: toggleLoginModal } = useDisclosure();
  const { isOpen: showRegistrationModal, toggle: toggleRegistrationModal } =
    useDisclosure();
  const { isOpen: showUserModal, toggle: toggleUserModal } = useDisclosure();

  const handleRegistrationSuccessClose = () => {
    toggleRegistrationModal();
    toggleLoginModal();
  };

  const handleLoginSuccessClose = () => {
    toggleLoginModal();
    toggleUserModal();
  };

  return (
    <>
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
              onClick={toggleLoginModal}
            >
              Login
            </Button>
          </NavItem>
          <NavItem>
            <Button
              variant={ButtonVariant.Solid}
              shape={ButtonShape.Rounded}
              onClick={toggleRegistrationModal}
            >
              New Account
            </Button>
          </NavItem>
        </List>
      </Nav>
      {showRegistrationModal &&
        createPortal(
          <RegistrationModal
            onClose={toggleRegistrationModal}
            onSuccessClose={handleRegistrationSuccessClose}
          />,
          document.body,
        )}
      {showLoginModal &&
        createPortal(
          <LoginModal
            onClose={toggleLoginModal}
            onSuccessClose={handleLoginSuccessClose}
          />,
          document.body,
        )}
      {showUserModal &&
        createPortal(
          <UserModal user={null} onClose={toggleUserModal} />,
          document.body,
        )}
    </>
  );
};
