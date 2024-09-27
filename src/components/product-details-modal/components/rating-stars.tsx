import { FC } from 'react';
import {
  IoStar as FullIcon,
  IoStarHalf as HalfIcon,
  IoStarOutline as EmptyIcon,
} from 'react-icons/io5';

interface Props {
  rating: number;
}

const RatingStars: FC<Props> = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FullIcon key={i} className='text-dark' />);
      } else if (rating > i - 1) {
        stars.push(<HalfIcon key={i} className='text-dark' />);
      } else {
        stars.push(<EmptyIcon key={i} className='text-dark' />);
      }
    }
    return stars;
  };

  return (
    <div className='flex items-center justify-center text-md gap-1'>
      {renderStars()}
      <span className='ml-2 text-md font-regular'>{rating.toFixed(2)}</span>
    </div>
  );
};

export default RatingStars;
