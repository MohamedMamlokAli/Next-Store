import React from 'react';
import styled from 'styled-components';
import { NavItem } from '../../Common/NavItem';
import { AiFillHome } from 'react-icons/ai';
import { GiAmpleDress } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { State } from '../../../state';
type Props = {
  color?: string;
};
const Navbar: React.FC = () => {
  const user = useSelector((state: State) => state.user);
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
              <NavItemName color='#324d67'>Home</NavItemName>
            </NavItem>
            <NavItem href='/products' as='/products'>
              <NavItemName color='#324d67'>Products</NavItemName>
            </NavItem>
          </DesktopNav>
          <IconContainer>
            <NavItem href='/cart' as='/cart'>
              <NavItemIcon>
                <FaShoppingCart fill='#795744' />
              </NavItemIcon>
              <NavItemName color='#324d67'>Cart</NavItemName>
            </NavItem>
            <NavItem href='/login' as='/login'>
              <NavItemIcon>
                <BsFillPersonFill fill='#795744' />
              </NavItemIcon>
              <NavItemName color='#324d67'>
                {user.user ? 'SignOut' : 'SignIn'}
              </NavItemName>
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
          <NavItemName>{user.user ? 'SignOut' : 'SignIn'}</NavItemName>
        </NavItem>
      </MobileNav>
    </div>
  );
};

export default Navbar;

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
  padding-bottom: 2px;
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
