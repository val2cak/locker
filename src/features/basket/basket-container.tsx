import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BasketItem } from '../../types/product-types';
import { setProductsToStorage } from '../../services/storage';
import {
  removeProduct,
  selectProducts,
  setProducts,
} from '../../hooks/basket-state';
import Layout from '../layout';
import PaymentSection from './components/payment-section';
import BasketItemsSection from './components/basket-items-section';
import locale from '../../localization/locale';

const BasketContainer = () => {
  const dispatch = useDispatch();
  const basketProducts = useSelector(selectProducts);

  const { basket } = locale.basket;

  const [deliveryCost] = useState(20);

  const updateAmount = (item: BasketItem, change: number) => {
    const newAmount = item.amount + change;

    if (newAmount >= item.product.minimumOrderQuantity) {
      const updatedBasket = basketProducts
        .map((basket) =>
          basket.product.id === item.product.id
            ? { ...basket, amount: newAmount }
            : basket
        )
        .filter((basket) => basket.amount > 0);
      setProductsToStorage(updatedBasket);
      dispatch(setProducts(updatedBasket));
    }
  };

  const handleDelete = (id: string) => {
    dispatch(removeProduct(id));
  };

  const totalPrice = basketProducts.reduce(
    (total, item) => total + item.product.price * item.amount,
    0
  );

  const clearBasket = () => {
    dispatch(setProducts([]));
  };

  return (
    <Layout>
      <div className='sm:px-8 lg:px-16 px-40 py-8 flex flex-col gap-8'>
        <span className='font-righteous uppercase text-lg'>{basket}</span>

        <div className='flex gap-12 w-full justify-between sm:flex-col sm:gap-8'>
          <div className='w-2/3 sm:w-full'>
            <BasketItemsSection
              basket={basketProducts}
              updateAmount={updateAmount}
              handleDelete={handleDelete}
            />
          </div>

          <div className='w-1/3 sm:w-full'>
            <PaymentSection
              totalPrice={totalPrice}
              deliveryCost={deliveryCost}
              clearBasket={clearBasket}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BasketContainer;
