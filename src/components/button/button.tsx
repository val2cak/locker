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
      className={`flex px-8 py-2 justify-center items-center rounded-3xl sm:text-base text-lg text-dark bg-dark hover:opacity-70 uppercase font-righteous ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
