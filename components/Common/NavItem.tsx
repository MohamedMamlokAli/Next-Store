import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';

interface CustomLinkProps {
  href: string;
  as: string;
  className?: string;
  children: React.ReactNode;
}

const Anchor = styled('a')`
  text-decoration: none !important;
  flex-basis: 100%;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
`;

export const NavItem = ({ className, href, as, children }: CustomLinkProps) => (
  <Link href={href} as={as} passHref>
    <Anchor className={className || ''}>{children}</Anchor>
  </Link>
);
