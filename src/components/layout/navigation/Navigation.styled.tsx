import styled from 'styled-components';
import { Avatar } from '../../ui/avatar/Avatar';
import { Button } from '../../ui/button/Button';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }
`;

export const List = styled.ul<{
  userLoggedIn: boolean;
}>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  align-items: center;

  font-family: ${({ userLoggedIn }) =>
    userLoggedIn
      ? '"Ubuntu", sans-serif'
      : '"Montserrat", sans-serif'}; // TODO: Check correct font family, on one design page is Ubuntu and on the other is Montserrat

  @media (max-width: 767px) {
    display: none;
    &.mobile-navigation {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-left: 17px;
  font-size: 14px;
  & a {
    padding: 12px 22px;
    text-decoration: none;
  }
  & span {
    padding: 12px 22px;
    color: #949ea0;
    text-decoration: none;
  }

  @media (max-width: 992px) {
    margin-left: 10px;

    & a {
      padding: 12px;
    }
    & span {
      padding: 12px;
    }
  }

  @media (max-width: 767px) {
    margin: 0 0 50px 0;

    & a {
      padding: 12px 0;
    }
    & span {
      padding: 12px 0;
    }
  }
`;

export const UserItem = styled.span`
  display: flex;
  flex-direction: row;
  padding: 12px 22px;
  align-items: center;
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 12px 0;
  }
`;

export const StyledAvatar = styled(Avatar)`
  margin-left: 20px;
`;

export const MobileNavItem = styled(NavItem)`
  margin: 0;
`;

export const HamburgerButton = styled(Button)`
  border: none;
  background: transparent;
  box-shadow: none;
  display: none;

  @media (max-width: 767px) {
    width: 24px;
    height: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
