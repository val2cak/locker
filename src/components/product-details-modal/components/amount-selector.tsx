import React from 'react';
import {
  HiOutlinePlus as PlusIcon,
  HiOutlineMinus as MinusIcon,
} from 'react-icons/hi2';

interface Props {
  amount: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const AmountSelector: React.FC<Props> = ({
  amount,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className='flex w-fit items-center gap-1 rounded-full px-1.5 py-1.5 border border-dark border-opacity-25 sm:py-1 sm:flex-1 sm:justify-between'>
      <button
        onClick={onDecrease}
        className='px-3 py-1 text-dark opacity-50 rounded-md text-md sm:text-base sm:px-2'
      >
        <MinusIcon />
      </button>
      <span className='text-md font-medium sm:text-base'>{amount}</span>
      <button
        onClick={onIncrease}
        className='px-3 py-1 text-dark opacity-50 rounded-md text-md sm:text-base sm:px-2'
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default AmountSelector;
