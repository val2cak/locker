import { useState } from 'react';
import { FiSearch as SearchIcon, FiX as ClearIcon } from 'react-icons/fi';

import locale from '../../../localization/locale';

const SearchInput = ({ onSearch }) => {
  const { search } = locale.common;

  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    onSearch(value);
  };

  const handleClear = () => {
    setUserInput('');
    onSearch('');
  };

  return (
    <div className='relative text-md w-full'>
      <SearchIcon className='absolute left-4 top-1/2 transform -translate-y-1/2 text-dark text-md' />
      <input
        type='text'
        value={userInput}
        onChange={handleChange}
        placeholder={search + '...'}
        className='w-full outline-none bg-primary text-dark font-medium pl-12 sm:pr-9 pr-10 py-1 rounded-3xl placeholder:text-dark placeholder:text-opacity-50'
      />
      {userInput && (
        <ClearIcon
          className='absolute top-1/2 right-4 transform -translate-y-1/2 text-dark cursor-pointer text-md'
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default SearchInput;
