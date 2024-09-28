import { FC } from 'react';

import Dropdown from '../../../components/dropdown/dropdown';
import { sortOptions } from '../../../constants/sort-options';
import { SortOptions } from '../../../types/product-types';

interface Props {
  sort: SortOptions;
  setSort: (item: SortOptions) => void;
}

const Filters: FC<Props> = ({ sort, setSort }) => {
  const handleSortSelect = (selectedSort) => {
    setSort(selectedSort);
  };

  return (
    <div className='bg-primary w-full sm:px-8 lg:px-16 px-40 py-4 flex gap-16'>
      <Dropdown
        items={sortOptions}
        onSelect={handleSortSelect}
        selectedItem={sort}
      />
    </div>
  );
};

export default Filters;
