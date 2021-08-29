import React from 'react';
import styled from 'styled-components';
import { ProductData } from '../../../pages';
import { returnCategories } from '../../../utils';
//Styled Components

const FilterContainer = styled.div`
  user-select: none;

  height: 100%;
  flex-basis: 20%;
  display: flex;
  gap: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 50px;
  @media screen and (min-width: 768px) {
    padding-left: 10px;

    position: sticky;
    text-align: left;
    align-items: flex-start;
    justify-content: center;
  }
`;
const SearchContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid black;
`;
const SearchBar = styled.input`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border: none;
  :focus {
    outline: none;
  }
`;
const FiltersTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
`;
const CategoryContainer = styled.div``;
const CategoryList = styled.ul`
  list-style: none;
  margin: 2px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;
const CategoryListItem = styled.li`
  padding: 5px 0;
  color: var(--clr-grey-5);
  text-transform: capitalize;
  cursor: pointer;
  width: max-content;
  &.active {
    font-weight: bold;
  }
  :hover {
    font-weight: bold;
  }
  :last-child {
    padding-bottom: 0;
  }
`;
const PriceFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Price = styled.span`
  color: var(--clr-grey-3);
`;
const PriceRange = styled.input``;
export const ClearFilters = styled.button`
  background: var(--clr-red-dark);
  color: var(--clr-white);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius);
  :hover {
    color: var(--clr-red-dark);
    background-color: var(--clr-white);
  }
`;
type Props = {
  currentPriceValue: number;
  maximum: number;
  minimum: number;
  search: string;
  setProducts: React.Dispatch<React.SetStateAction<ProductData[]>>;
  setCurrentPriceValue: React.Dispatch<React.SetStateAction<number>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  ProductInfo: ProductData[];
};

const ProductsFilter: React.FC<Props> = ({
  ProductInfo,
  setProducts,
  setCurrentPriceValue,
  setSearch,
  search,
  currentPriceValue,
  maximum,
  minimum,
}) => {
  const categories = returnCategories(ProductInfo);
  const [active, setActive] = React.useState(5);
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPriceValue(parseInt(e.target.value));
  };
  return (
    <FilterContainer>
      <SearchContainer>
        <SearchBar
          type='text'
          placeholder='Search...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchContainer>
      <CategoryContainer>
        <FiltersTitle>Category</FiltersTitle>
        <CategoryList>
          {categories.map((item, index) => (
            <CategoryListItem
              key={index}
              onClick={() => {
                setProducts(
                  ProductInfo.filter((product) => product.category == item)
                );
                setActive(index);
              }}
              className={active == index ? `active` : ``}
            >
              {item}
            </CategoryListItem>
          ))}
        </CategoryList>
      </CategoryContainer>
      <PriceFilterContainer>
        <FiltersTitle>Price</FiltersTitle>
        <Price>${currentPriceValue}</Price>

        <PriceRange
          type='range'
          min={minimum}
          max={maximum}
          value={currentPriceValue}
          onChange={(e) => handlePriceChange(e)}
        />
      </PriceFilterContainer>
      <ClearFilters
        onClick={() => {
          setProducts(ProductInfo);
          setCurrentPriceValue(maximum);
          setActive(5);
        }}
      >
        Clear Filters
      </ClearFilters>
    </FilterContainer>
  );
};

export default ProductsFilter;
