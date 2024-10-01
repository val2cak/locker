import { FC } from 'react';

interface Props {
  label: string;
  value: string | number;
}

const CardItem: FC<Props> = ({ label, value }) => {
  return (
    <div className='flex justify-between font-medium text-md sm:gap-4 sm:text-base sm:overflow-hidden'>
      <span className='opacity-50'>{label}</span> <span>{value}</span>
    </div>
  );
};

export default CardItem;
