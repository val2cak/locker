import { FC } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import locale from '../../../localization/locale';
import Button from '../../../components/button/button';
import { selectProducts } from '../../../hooks/basket-state';

interface Props {
  totalPrice: number;
  deliveryCost: number;
  clearBasket: () => void;
}

const PaymentSection: FC<Props> = ({
  totalPrice,
  deliveryCost,
  clearBasket,
}) => {
  const { price, payment, delivery, total, buyNow, purchaseSuccessful } =
    locale.basket;

  const basketProducts = useSelector(selectProducts);

  const handleBuyNow = () => {
    if (basketProducts.length > 0) {
      toast.success(purchaseSuccessful);
      clearBasket();
    }
  };

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

      <Button text={buyNow} className='w-full' handleOnClick={handleBuyNow} />
    </div>
  );
};

export default PaymentSection;
