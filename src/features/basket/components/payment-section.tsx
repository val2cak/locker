import { FC } from 'react';

import locale from '../../../localization/locale';
import Button from '../../../components/button/button';

interface PaymentSectionProps {
  totalPrice: number;
  deliveryCost: number;
}

const PaymentSection: FC<PaymentSectionProps> = ({
  totalPrice,
  deliveryCost,
}) => {
  const { price, payment, delivery, total, buyNow } = locale.basket;

  return (
    <div className='bg-primary p-9 flex flex-col gap-4'>
      <span className='font-righteous uppercase text-lg'>{payment}</span>

      <div className='flex justify-between text-md'>
        <span className='font-medium text-dark opacity-50'>{price}</span>
        <span className='font-semibold'>
          {'€'}
          {totalPrice.toFixed(2)}
        </span>
      </div>
      <div className='flex justify-between text-md'>
        <span className='font-medium text-dark opacity-50'>{delivery}</span>
        <span className='font-semibold'>
          {'€'}
          {deliveryCost.toFixed(2)}
        </span>
      </div>
      <div className='flex justify-between font-bold text-lg'>
        <span>{total}</span>
        <span>
          {'€'}
          {(totalPrice + deliveryCost).toFixed(2)}
        </span>
      </div>

      <Button text={buyNow} className='w-full' />
    </div>
  );
};

export default PaymentSection;
