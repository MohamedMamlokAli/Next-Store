import React from 'react';
import styled from 'styled-components';
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
const CategoryList = styled.ul``;
const CategoryListItem = styled.li``;
const PriceFilterContainer = styled.div``;
const PriceRange = styled.input``;
const ClearFilters = styled.button``;
const ProductsFilter = () => {
  return (
    <FilterContainer>
      <SearchContainer>
        <SearchBar type='text' />
      </SearchContainer>
      <CategoryContainer>
        <FiltersTitle>Category</FiltersTitle>
        <CategoryList>
          <CategoryListItem>item1</CategoryListItem>
          <CategoryListItem>item2</CategoryListItem>
          <CategoryListItem>item3</CategoryListItem>
          <CategoryListItem>item4</CategoryListItem>
        </CategoryList>
      </CategoryContainer>
      <PriceFilterContainer>
        <FiltersTitle>Price</FiltersTitle>
        <PriceRange type='range' />
      </PriceFilterContainer>
      <ClearFilters>Clear Filters</ClearFilters>
    </FilterContainer>
  );
};

export default ProductsFilter;
