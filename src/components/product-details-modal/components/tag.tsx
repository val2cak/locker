import { FC } from 'react';

interface Props {
  text: string;
}

const Tag: FC<Props> = ({ text }) => {
  return (
    <span className='inline-block bg-light rounded-full px-4 py-0.5 text-base'>
      {text}
    </span>
  );
};

export default Tag;
