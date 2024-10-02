import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from '../../types/product-types';
import Modal from '../modal/modal';
import ImageSlider from './components/image-slider';
import RatingStars from './components/rating-stars';
import Section from './components/section';
import Tag from './components/tag';
import AmountSelector from './components/amount-selector';
import locale from '../../localization/locale';
import Button from '../button/button';
import FavoriteCell from '../favorite-cell/favorite-cell';
import { getUserFromStorage } from '../../services/storage';
import { RootState } from '../../app/store';
import { addProduct, removeProduct } from '../../hooks/basket-state';

interface Props {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailsModal: FC<Props> = ({ product, isOpen, onClose }) => {
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basket.basket);
  const isInBasket = basket.some((item) => item.product.id === product.id);

  const userJson: string | null = getUserFromStorage();

  const {
    additionalInfo,
    productDetails,
    reviews,
    tags,
    addButton,
    removeButton,
    description,
    availabilityStatus,
    brand,
    dimensions,
    returnPolicy,
    shippingInfo,
    warrantyInfo,
    height,
    depth,
    width,
  } = locale.productDetails;

  const [amount, setAmount] = useState(product.minimumOrderQuantity);

  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => {
    if (amount > product.minimumOrderQuantity) {
      setAmount(amount - 1);
    }
  };

  const handleBasket = () => {
    if (isInBasket) {
      dispatch(removeProduct(product.id));
    } else {
      dispatch(addProduct({ product, amount }));
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='flex flex-row h-[600px] sm:h-full sm:flex-col sm:gap-4 md:h-full md:flex-col md:gap-4 2xl:h-[700px]'>
        <ImageSlider images={product.images} title={product.title} />

        <div className='w-full p-4 flex flex-col gap-4 sm:p-0'>
          <h2 className='text-lg font-semibold sm:leading-4 md:leading-4'>
            {product.title}
          </h2>
          <p className='text-xl font-semibold'>
            {'€'}
            {product.price.toFixed(2)}
          </p>

          <div className='flex items-center'>
            <RatingStars rating={product.rating} />
          </div>

          {userJson !== null && (
            <div className='flex items-center gap-4 sm:justify-between md:gap-8'>
              {!isInBasket && (
                <AmountSelector
                  amount={amount}
                  onIncrease={increaseAmount}
                  onDecrease={decreaseAmount}
                />
              )}

              <Button
                text={isInBasket ? removeButton : addButton}
                className='!bg-primary'
                handleOnClick={handleBasket}
              />

              <FavoriteCell item={product} size={'text-xl'} />
            </div>
          )}

          <Section title={productDetails}>
            <p className='flex flex-col'>
              <span className='uppercase font-light'>{description}</span>
              <span>
                <span>{product.description}</span>
              </span>
            </p>
            <p className='flex flex-col'>
              <span className='uppercase font-light'>{brand}</span>
              <span>
                <span>{product.brand}</span>
              </span>
            </p>
            <p className='flex flex-col'>
              <span className='uppercase font-light'>{dimensions}</span>
              <span className='flex justify-between'>
                <span>{width}</span> <span>{product.dimensions.width}</span>
              </span>
              <span className='flex justify-between'>
                <span>{height}</span> <span>{product.dimensions.height}</span>
              </span>
              <span className='flex justify-between'>
                <span>{depth}</span> <span>{product.dimensions.depth}</span>
              </span>
            </p>
          </Section>

          <Section title={additionalInfo}>
            <p className='flex flex-col'>
              <span className='uppercase font-light'>{warrantyInfo}</span>
              <span>{product.warrantyInformation}</span>
            </p>
            <p className='flex flex-col'>
              <span className='uppercase font-light'>{shippingInfo}</span>
              <span>{product.shippingInformation}</span>
            </p>
            <p className='flex flex-col'>
              <span className='uppercase font-light'>{availabilityStatus}</span>
              <span>{product.availabilityStatus}</span>
            </p>
            <p className='flex flex-col'>
              <span className='uppercase font-light'>{returnPolicy}</span>
              <span>{product.returnPolicy}</span>
            </p>
          </Section>

          <Section title={reviews}>
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className='border-b border-light pb-4 flex flex-col items-start'
              >
                <RatingStars rating={review.rating} />
                <span className=''>{review.comment}</span>
                <span className='flex justify-between w-full'>
                  <span className='font-medium'>{review.reviewerName}</span>
                  <span className='font-light'>
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </span>
              </div>
            ))}
          </Section>

          <div className='flex flex-col gap-1 pb-8'>
            <span className='text-md font-medium uppercase'>{tags}</span>
            <div className='flex gap-2'>
              {product.tags.map((tag, idx) => (
                <Tag key={idx} text={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailsModal;
