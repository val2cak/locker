import { FC, MouseEventHandler } from 'react';

interface Props {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  handleOnClick?: MouseEventHandler;
  className?: string;
}

const Button: FC<Props> = ({ text, type, handleOnClick, className }) => {
  return (
    <button
      onClick={handleOnClick}
      type={type ?? 'button'}
      className={`flex px-12 py-1.5 justify-center items-center rounded-full sm:text-base text-md text-dark bg-white hover:opacity-70 uppercase font-righteous ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
