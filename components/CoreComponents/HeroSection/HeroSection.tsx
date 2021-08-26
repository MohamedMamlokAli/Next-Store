import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { NavImage } from '../Navbar/Navbar';

const HeroSectionContainer = styled.section`
  height: calc(100vh - 11.125rem);
  width: 80%;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: left;
    height: calc(100vh - 5.125rem);

    justify-content: space-between;
    align-items: center;
  }
`;

const HeroSectionText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 40%;
    align-items: flex-start;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--clr-gray-1);
  @media screen and (min-width: 768px) {
    font-size: 2.125rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const SectionDescription = styled.p`
  line-height: 2;
  font-size: 1rem;
  color: var(--clr-grey-6);
  max-width: 40em;
  margin-bottom: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
  @media screen and (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  text-align: center;
  letter-spacing: 2px;
  font-size: 1rem;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  border-radius: 10px;
  padding: 1em 1.5em;
  transition: all 300ms ease;
  :hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
  }
`;

const HeroSectionImage = styled.div`
  display: none;
  width: 40%;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
const Image = styled(NavImage)`
  max-width: 450px;
`;

export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroSectionText>
        <SectionTitle>
          Design Your <br /> Comfort Zone
        </SectionTitle>
        <SectionDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </SectionDescription>
        <Link href='/products' as='/products' passHref>
          <StyledLink>Shop now</StyledLink>
        </Link>
      </HeroSectionText>
      <HeroSectionImage>
        <Image src={'/hero-lg.jpg'} alt='Hero section Image' />
      </HeroSectionImage>
    </HeroSectionContainer>
  );
};
