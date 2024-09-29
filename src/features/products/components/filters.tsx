import { FC } from 'react';

import Dropdown from '../../../components/dropdown/dropdown';
import { sortOptions } from '../../../constants/sort-options';
import { SortOptions, Category } from '../../../types/product-types';

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
  const handleSortSelect = (selectedSort: SortOptions) => {
    setSort(selectedSort);
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
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
    </div>
  );
};

export default Filters;
