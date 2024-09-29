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
    <div className='flex w-fit items-center gap-1 rounded-full px-1.5 py-1.5 border border-dark border-opacity-25'>
      <button
        onClick={onDecrease}
        className='px-3 py-1 text-dark opacity-50 rounded-md text-md'
      >
        <MinusIcon />
      </button>
      <span className='text-md font-medium'>{amount}</span>
      <button
        onClick={onIncrease}
        className='px-3 py-1 text-dark opacity-50 rounded-md text-md'
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default AmountSelector;
