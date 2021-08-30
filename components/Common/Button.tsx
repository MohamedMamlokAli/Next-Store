import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
const Anchor = styled.a`
  text-decoration: none;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.5rem 0.75rem;
  letter-spacing: var(--spacing);
  white-space: nowrap;
  font-weight: 400;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 10px;
  border-color: transparent;
  transition: all 0.3s ease;
  :hover {
    color: var(--clr-primary-5);
    background: var(--clr-primary-10);
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

type Props = {
  href: string;
  as: string;
  onClick?: () => void;
};
const Button: React.FC<Props> = ({ href, as, children, onClick }) => {
  return (
    <Link href={href} as={as} passHref>
      <Anchor onClick={onClick}>{children}</Anchor>
    </Link>
  );
};

export default Button;
