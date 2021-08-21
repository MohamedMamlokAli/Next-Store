import React, { ReactNode } from 'react';
import styled from 'styled-components';
import NavItem from '../../Common/NavItem';

const Navbar: React.FC = () => {
  return (
    <div>
      <MobileNav>
        <NavItem href='/' as='/'>
          <NavItemIcon>🏠</NavItemIcon>
          <NavItemName>Home</NavItemName>
        </NavItem>
        <NavItem href='/products' as='/products'>
          <NavItemIcon>🏠</NavItemIcon>
          <NavItemName>Products</NavItemName>
        </NavItem>
        <NavItem href='/about' as='/about'>
          <NavItemIcon>🏠</NavItemIcon>
          <NavItemName>About</NavItemName>
        </NavItem>
        <NavItem href='/cart' as='/cart'>
          <NavItemIcon>🏠</NavItemIcon>
          <NavItemName>Cart</NavItemName>
        </NavItem>
        <NavItem href='/login' as='/login'>
          <NavItemIcon>🏠</NavItemIcon>
          <NavItemName>Login</NavItemName>
        </NavItem>
      </MobileNav>
    </div>
  );
};

export default Navbar;
{
  /*
1- mobile navbar
--Navbar will be fixed to the bottom of the screen with icons to navigate to the pages
--The header will just contain the logo of the page in the center
{
 find suitable icons
}

2-Desktop navbar
--The Navbar is going to contain The [logo, [Home,Products, About] , [Cart button , Login button] ]  

*/
}
const MobileNav = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  background: var(--clr-primary-3);
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavItemIcon = styled.span`
  font-size: 2rem;
`;
const NavItemName = styled.h3`
  font-size: 0.875rem;
`;
