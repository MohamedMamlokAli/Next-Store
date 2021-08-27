import React from 'react';
import styled from 'styled-components';
import { ProductData } from '../../../pages';
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
type Props = {
  setProducts: React.Dispatch<React.SetStateAction<ProductData[]>>;
  ProductInfo: ProductData[];
};

const ProductsFilter: React.FC<Props> = ({ ProductInfo, setProducts }) => {
  return (
    <FilterContainer>
      <SearchContainer>
        <SearchBar type='text' />
      </SearchContainer>
      <CategoryContainer>
        <FiltersTitle>Category</FiltersTitle>
        <CategoryList>
          <CategoryListItem
            onClick={() =>
              setProducts([
                {
                  id: 1,
                  category: 'Mens',
                  image: '',
                  price: 9.99,
                  title: 'test',
                },
              ])
            }
          >
            item1
          </CategoryListItem>
          <CategoryListItem>item2</CategoryListItem>
          <CategoryListItem>item3</CategoryListItem>
          <CategoryListItem>item4</CategoryListItem>
        </CategoryList>
      </CategoryContainer>
      <PriceFilterContainer>
        <FiltersTitle>Price</FiltersTitle>
        <PriceRange type='range' />
      </PriceFilterContainer>
      <ClearFilters onClick={() => setProducts(ProductInfo)}>
        Clear Filters
      </ClearFilters>
    </FilterContainer>
  );
};

export default ProductsFilter;
