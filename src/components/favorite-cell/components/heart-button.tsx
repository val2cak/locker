import { FC, MouseEventHandler } from 'react';
import {
  IoMdHeart as FullHeartIcon,
  IoMdHeartEmpty as EmptyHeartIcon,
} from 'react-icons/io';

interface Props {
  favorite: boolean;
  handleOnClick?: MouseEventHandler;
  size: string;
}

const HeartButton: FC<Props> = ({ favorite, handleOnClick, size }) => {
  return (
    <button
      onClick={handleOnClick}
      type={'button'}
      className='hover:scale-105 align-middle'
    >
      {favorite ? (
        <FullHeartIcon className={`${size} text-secondary`} />
      ) : (
        <EmptyHeartIcon className={`${size} text-secondary`} />
      )}
    </button>
  );
};

export default HeartButton;
