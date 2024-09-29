import { FC } from 'react';

import Dropdown from '../../../components/dropdown/dropdown';
import { sortOptions } from '../../../constants/sort-options';
import { SortOptions, Category } from '../../../types/product-types';
import locale from '../../../localization/locale';
import Button from '../../../components/button/button';

interface Props {
  sort: SortOptions;
  setSort: (item: SortOptions) => void;
  selectedCategory: Category | null;
  setSelectedCategory: (item: Category | null) => void;
  categories: Category[] | undefined;
}

const Filters: FC<Props> = ({
  sort,
  setSort,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  const { reset } = locale.products;

  const handleSortSelect = (selectedSort: SortOptions) => {
    setSort(selectedSort);
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleResetFilters = () => {
    setSort(sortOptions[0]);
    setSelectedCategory(categories[0]);
  };

  return (
    <div className='bg-primary w-full sm:px-8 lg:px-16 px-40 py-4 flex gap-8'>
      <Dropdown
        items={categories || []}
        onSelect={handleCategorySelect}
        selectedItem={selectedCategory || categories[0]}
      />

      <Dropdown
        items={sortOptions}
        onSelect={handleSortSelect}
        selectedItem={sort}
      />

      <Button
        text={reset}
        handleOnClick={handleResetFilters}
        className='!py-0.5 !px-8 !text-base !bg-dark !text-light'
      />
    </div>
  );
};

export default Filters;
