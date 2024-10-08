import { FC } from 'react';

import Dropdown from '../../../components/dropdown/dropdown';
import { sortOptions } from '../../../constants/sort-options';
import { Filters as FiltersType, Category } from '../../../types/product-types';
import locale from '../../../localization/locale';
import Button from '../../../components/button/button';

interface Props {
  filters: FiltersType;
  setFilters: (filters: FiltersType) => void;
  categories: Category[] | undefined;
  handleResetFilters: () => void;
}

const Filters: FC<Props> = ({
  filters,
  setFilters,
  categories,
  handleResetFilters,
}) => {
  const { reset } = locale.products;

  const handleSortSelect = (selectedSort) => {
    setFilters({ ...filters, sort: selectedSort });
  };

  const handleCategorySelect = (category: Category) => {
    setFilters({ ...filters, selectedCategory: category });
  };

  return (
    <div className='bg-primary w-full sm:px-8 md:px-12 lg:px-16 px-40 py-4 flex gap-8 sm:flex-col sm:gap-4'>
      <Dropdown
        items={categories || []}
        onSelect={handleCategorySelect}
        selectedItem={filters.selectedCategory || categories[0]}
      />

      <Dropdown
        items={sortOptions}
        onSelect={handleSortSelect}
        selectedItem={filters.sort}
      />

      <Button
        text={reset}
        handleOnClick={handleResetFilters}
        className='!py-0.5 !px-8 !text-base !bg-dark !text-light sm:!py-1.5'
      />
    </div>
  );
};

export default Filters;
