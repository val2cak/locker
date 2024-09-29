import { FC } from 'react';
import { PiTrash as TrashIcon } from 'react-icons/pi';

import { BasketItem } from '../../../types/product-types';
import AmountSelector from '../../../components/product-details-modal/components/amount-selector';
import placeholder from '../../../assets/images/user-placeholder.png';

interface Props {
  item: BasketItem;
  onIncrease: () => void;
  onDecrease: () => void;
  onDelete: () => void;
}

const BasketCard: FC<Props> = ({ item, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className='flex justify-between items-start hover:shadow-md p-4'>
      <div className='flex gap-6'>
        <img
          src={item.product.images[0] || placeholder}
          alt={item.product.title}
          className='w-36 h-40 object-cover bg-gray bg-opacity-20'
          loading='lazy'
        />

        <div className='flex flex-col gap-6'>
          <span className='font-semibold text-md'>{item.product.title}</span>
          <AmountSelector
            amount={item.amount}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        </div>
      </div>

      <div className='flex flex-col gap-6 items-end pt-2'>
        <button onClick={onDelete} className='text-error text-lg'>
          <TrashIcon />
        </button>
        <span className='font-semibold text-lg'>
          {'€'}
          {(item.product.price * item.amount).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default BasketCard;
