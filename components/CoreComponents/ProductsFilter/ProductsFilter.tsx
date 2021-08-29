import React from 'react';
import styled from 'styled-components';
import { ProductData } from '../../../pages';
import { returnCategories } from '../../../utils';
//Styled Components

const FilterContainer = styled.div`
  height: 100%;
  flex-basis: 20%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  top: 50px;
  @media screen and (min-width: 768px) {
    position: sticky;
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
const FiltersTitle = styled.h4``;
const CategoryContainer = styled.div``;
const CategoryList = styled.ul`
  list-style: none;
  margin: 2px 0;
`;
const CategoryListItem = styled.li`
  padding: 5px 0;
  color: var(--clr-grey-5);
  text-transform: capitalize;
  cursor: pointer;
  user-select: none;
  width: max-content;
  &.active {
    border-bottom: 1px solid;
    border-color: var(--clr-grey-5);
  }
  :last-child {
    padding-bottom: 0;
  }
`;
const PriceFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PriceRange = styled.input``;
const ClearFilters = styled.button``;
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
  const [active, setActive] = React.useState(0);
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
        <span>${currentPriceValue}</span>

        <PriceRange
          type='range'
          min={minimum}
          max={maximum}
          value={currentPriceValue}
          onChange={(e) => handlePriceChange(e)}
        />
      </PriceFilterContainer>
      <ClearFilters onClick={() => setProducts(ProductInfo)}>
        Clear Filters
      </ClearFilters>
    </FilterContainer>
  );
};

export default ProductsFilter;
