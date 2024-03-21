import React from 'react';
import { ModalProps } from '../ui/modal/Modal';
import { ModalBody } from '../ui/modal/Modal.styled';
import { useAuth } from '../../core/auth/AuthProvider';
import {
  List,
  NavItem,
  StyledAvatar,
  UserItem,
} from '../layout/navigation/Navigation.styled';
import { Link } from 'react-router-dom';
import { Button, ButtonShape, ButtonVariant } from '../ui/button/Button';
import { MobileMenuModalStyled } from './MobileMenuModal.styled';

export enum ModalType {
  Login = 'Login',
  Registration = 'Registration',
  User = 'User',
}
interface MobileMenuModalProps extends ModalProps {
  onToggleModal: (type: ModalType) => void;
}

export const MobileMenuModal = ({
  onClose,
  onToggleModal,
}: MobileMenuModalProps) => {
  const { user } = useAuth();
  return (
    <>
      <MobileMenuModalStyled onClose={onClose} showCloseIcon={false}>
        <ModalBody>
          <List userLoggedIn={!!user} className="mobile-navigation">
            <NavItem>
              <Link to="/flowers" onClick={onClose}>
                Flowers
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/latest-sightings" onClick={onClose}>
                Latest Sightings
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/favorites" onClick={onClose}>
                Favorites
              </Link>
            </NavItem>
            {!user && (
              <>
                <NavItem>
                  <Button
                    variant={ButtonVariant.Link}
                    color="#DF9186"
                    onClick={() => onToggleModal(ModalType.Login)}
                  >
                    Login
                  </Button>
                </NavItem>
                <NavItem>
                  <Button
                    variant={ButtonVariant.Solid}
                    shape={ButtonShape.Rounded}
                    onClick={() => onToggleModal(ModalType.Registration)}
                  >
                    New Account
                  </Button>
                </NavItem>
              </>
            )}
            {user && (
              <NavItem>
                <UserItem onClick={() => onToggleModal(ModalType.User)}>
                  {user.first_name} {user.last_name}{' '}
                  <StyledAvatar image={user?.avatar} />
                </UserItem>
              </NavItem>
            )}
          </List>
        </ModalBody>
      </MobileMenuModalStyled>
    </>
  );
};
