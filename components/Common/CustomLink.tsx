import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type LinkProps = {
  href: string;
  as: string;
};

//Styled Components
const Anchor = styled.a`
  text-decoration: none;
`;

const CustomLink: React.FC<LinkProps> = ({ as, href, children }) => {
  return (
    <Link href={href} as={as} passHref>
      <Anchor>{children}</Anchor>
    </Link>
  );
};

export default CustomLink;
