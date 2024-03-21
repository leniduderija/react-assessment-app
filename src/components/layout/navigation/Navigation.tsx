import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Button, ButtonShape, ButtonVariant } from '../../ui/button/Button';
import { useDisclosure } from '../../../utils/hooks/useDisclosure';
import { createPortal } from 'react-dom';
import { RegistrationModal } from '../../registration-modal/RegistrationModal';
import { LoginModal } from '../../login-modal/LoginModal';
import { UserModal } from '../../user-modal/UserModal';
import { useAuth } from '../../../core/auth/AuthProvider';
import {
  HamburgerButton,
  List,
  MobileNavItem,
  Nav,
  NavItem,
  StyledAvatar,
  UserItem,
} from './Navigation.styled';
import {
  MobileMenuModal,
  ModalType,
} from '../../mobile-menu-modal/MobileMenuModal';

interface NavigationProps {
  className?: string;
}
export const Navigation = ({ className }: NavigationProps) => {
  const { isOpen: showLoginModal, toggle: toggleLoginModal } = useDisclosure();
  const { isOpen: showRegistrationModal, toggle: toggleRegistrationModal } =
    useDisclosure();
  const { isOpen: showUserModal, toggle: toggleUserModal } = useDisclosure();

  const { isOpen: showMobileMenu, toggle: toggleMobileMenu } = useDisclosure();

  const { user } = useAuth();

  const handleRegistrationSuccessClose = () => {
    toggleRegistrationModal();
    toggleLoginModal();
  };

  const handleLoginSuccessClose = () => {
    toggleLoginModal();
    toggleUserModal();
  };

  const handleModalOpen = (type: ModalType) => {
    if (showMobileMenu) toggleMobileMenu();
    switch (type) {
      case ModalType.Login:
        toggleLoginModal();
        return;
      case ModalType.Registration:
        toggleRegistrationModal();
        return;
      case ModalType.User:
        toggleUserModal();
        return;
      default:
        return;
    }
  };

  const handleToggleMobileMenu = () => {
    toggleMobileMenu();
    if (showRegistrationModal) toggleRegistrationModal();
    if (showLoginModal) toggleLoginModal();
    if (showUserModal) toggleUserModal();
  };

  return (
    <>
      <Nav className={cn('Navigation', className)} data-testid="Navigation">
        <List userLoggedIn={!!user}>
          <NavItem>
            <Link to="/flowers">Flowers</Link>
          </NavItem>
          <NavItem>
            <Link to="/latest-sightings">Latest Sightings</Link>
          </NavItem>
          <NavItem>
            <Link to="/favorites">Favorites</Link>
          </NavItem>
          {!user && (
            <>
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
            </>
          )}
          {user && (
            <NavItem>
              <UserItem onClick={toggleUserModal}>
                {user.first_name} {user.last_name}{' '}
                <StyledAvatar image={user?.avatar} />
              </UserItem>
            </NavItem>
          )}
        </List>
        <MobileNavItem>
          <HamburgerButton
            variant={ButtonVariant.Outlined}
            onClick={toggleMobileMenu}
          >
            {showMobileMenu ? (
              <img src="/images/icon-close.png" alt="Close Modal" />
            ) : (
              <img src="/images/mm_hamburger.png" alt="Mobile Menu" />
            )}
          </HamburgerButton>
        </MobileNavItem>
      </Nav>
      {showRegistrationModal &&
        createPortal(
          <RegistrationModal
            onClose={toggleRegistrationModal}
            onSuccessClose={handleRegistrationSuccessClose}
          />,
          document.getElementsByClassName('Main')[0],
        )}
      {showLoginModal &&
        createPortal(
          <LoginModal
            onClose={() => {
              toggleLoginModal();
              if (showMobileMenu) toggleMobileMenu();
            }}
            onSuccessClose={handleLoginSuccessClose}
          />,
          document.getElementsByClassName('Main')[0],
        )}
      {showUserModal &&
        user &&
        createPortal(
          <UserModal onClose={toggleUserModal} />,
          document.getElementsByClassName('Main')[0],
        )}

      {showMobileMenu &&
        createPortal(
          <MobileMenuModal
            onClose={handleToggleMobileMenu}
            onToggleModal={handleModalOpen}
          />,
          document.getElementsByClassName('Main')[0],
        )}
    </>
  );
};
