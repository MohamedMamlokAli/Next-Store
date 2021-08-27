import React from 'react';
import styled from 'styled-components';
import { ProductData } from '../../../pages';
import { returnCategories, capitalize } from '../../../utils';
//Styled Components

const FilterContainer = styled.div`
  position: sticky;
  height: 100%;
  top: 50px;
`;
const SearchContainer = styled.div``;
const SearchBar = styled.input``;
const FiltersTitle = styled.h4``;
const CategoryContainer = styled.div``;
const CategoryList = styled.ul`
  list-style: none;
`;
const CategoryListItem = styled.li``;
const PriceFilterContainer = styled.div``;
const PriceRange = styled.input``;
const ClearFilters = styled.button``;
type Props = {
  setProducts: React.Dispatch<React.SetStateAction<ProductData[]>>;
  setCurrentPriceValue: React.Dispatch<React.SetStateAction<number>>;
  currentPriceValue: number;
  maximum: number;
  minimum: number;

  ProductInfo: ProductData[];
};

const ProductsFilter: React.FC<Props> = ({
  ProductInfo,
  setProducts,
  setCurrentPriceValue,
  currentPriceValue,
  maximum,
  minimum,
}) => {
  const categories = returnCategories(ProductInfo);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPriceValue(parseInt(e.target.value));
  };
  return (
    <FilterContainer>
      <SearchContainer>
        <SearchBar type='text' />
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
              }}
            >
              {capitalize(item)}
            </CategoryListItem>
          ))}
        </CategoryList>
      </CategoryContainer>
      <PriceFilterContainer>
        <FiltersTitle>Price</FiltersTitle>
        <PriceRange
          type='range'
          min={minimum}
          max={maximum}
          value={currentPriceValue}
          onChange={(e) => handlePriceChange(e)}
        />
        <span>${currentPriceValue}</span>
      </PriceFilterContainer>
      <ClearFilters onClick={() => setProducts(ProductInfo)}>
        Clear Filters
      </ClearFilters>
    </FilterContainer>
  );
};

export default ProductsFilter;
