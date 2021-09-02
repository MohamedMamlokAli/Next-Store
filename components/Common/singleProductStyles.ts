import styled from 'styled-components';

export const PageWrapper = styled.section`
  padding-bottom: 10rem;
  @media screen and (min-width: 768px) {
    padding-bottom: 2rem;
  }
`;
export const LinkItem = styled.h2`
  display: inline;
  color: var(--clr-primary-3);
  padding: 0.5rem;
  transition: var(--transition);
  font-size: 1.5rem;
  :hover {
    color: var(--clr-grey-5);
  }
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
export const ProductContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const ProductImageContainer = styled.div`
  flex-basis: 100%;
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;
export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;
export const ProductInfoContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  gap: 1rem;
  h1,
  h2,
  h3 {
    letter-spacing: var(--spacing);
    line-height: 1.25;
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;
export const ProductName = styled.h2`
  font-size: 2rem;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
export const ProductPrice = styled.h5`
  font-size: 0.875rem;
  color: var(--clr-primary-5);
  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`;
export const ProductDiscription = styled.p`
  line-height: 2;
  max-width: 45em;
  color: var(--clr-grey-3);
`;
export const AddToCartContainer = styled.div``;
export const AmountContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 3rem;
  margin-bottom: 1rem;
  align-items: center;
`;
export const IncrementDecrement = styled.button`
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  padding: 1rem 0px;
  width: 2rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;
export const Amount = styled.span``;
