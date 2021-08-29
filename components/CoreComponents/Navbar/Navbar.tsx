import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { NavItem } from '../../Common/NavItem';
import { AiFillHome, AiFillPropertySafety } from 'react-icons/ai';
import { GiAmpleDress } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
type Props = {
  color?: string;
};
const Navbar: React.FC = () => {
  return (
    <div>
      {/* desktop nav */}
      <DesktopNavContainer>
        <NavContent>
          <NavLogoContainer>
            <NavImage src={'/logo.svg'} alt='Comfy Sloth Logo' />
          </NavLogoContainer>
          <DesktopNav>
            <NavItem href='/' as='/'>
              <NavItemName color='black'>Home</NavItemName>
            </NavItem>
            <NavItem href='/products' as='/products'>
              <NavItemName color='black'>Products</NavItemName>
            </NavItem>
          </DesktopNav>
          <IconContainer>
            <NavItem href='/cart' as='/cart'>
              <NavItemIcon>
                <FaShoppingCart fill='#795744' />
              </NavItemIcon>
              <NavItemName color='black'>Cart</NavItemName>
            </NavItem>
            <NavItem href='/login' as='/login'>
              <NavItemIcon>
                <BsFillPersonFill fill='#795744' />
              </NavItemIcon>
              <NavItemName color='black'>Login</NavItemName>
            </NavItem>
          </IconContainer>
        </NavContent>
      </DesktopNavContainer>
      {/* Mobile nav */}
      <MobileNav>
        <NavItem href='/' as='/'>
          <NavItemIcon>
            <AiFillHome />
          </NavItemIcon>
          <NavItemName>Home</NavItemName>
        </NavItem>
        <NavItem href='/products' as='/products'>
          <NavItemIcon>
            <GiAmpleDress />
          </NavItemIcon>
          <NavItemName>Products</NavItemName>
        </NavItem>

        <NavItem href='/cart' as='/cart'>
          <NavItemIcon>
            <FaShoppingCart />
          </NavItemIcon>
          <NavItemName>Cart</NavItemName>
        </NavItem>
        <NavItem href='/login' as='/login'>
          <NavItemIcon>
            <BsFillPersonFill />
          </NavItemIcon>
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
// Mobile navbar
const MobileNav = styled.section`
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 99;
  bottom: 0;
  background: var(--clr-primary-3);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavItemIcon = styled.span`
  font-size: 2rem;
`;
const NavItemName = styled.h3<Props>`
  font-size: 0.875rem;
  color: ${(Props) => Props.color || 'white'};
`;
//desktop navbar
const DesktopNavContainer = styled.header`
  display: block;
  width: 100%;
`;
const NavContent = styled.div`
  width: 80%;
  padding: 10px;
  box-shadow: 0px 2px var(--clr-primary-7);

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;
const DesktopNav = styled.nav`
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const NavLogoContainer = styled.div`
  width: 200px;
`;
export const NavImage = styled.img`
  width: 100%;
`;
const IconContainer = styled.div`
  display: none;
  justify-content: space-between;
  width: 15%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
