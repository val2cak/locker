import { FC } from 'react';

interface Props {
  label: string;
  value: string | number;
}

const CardItem: FC<Props> = ({ label, value }) => {
  return (
    <div className='flex justify-between font-medium text-md'>
      <span className='opacity-50'>{label}</span> <span>{value}</span>
    </div>
  );
};

export default CardItem;
