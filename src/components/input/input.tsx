import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputProps {
  name: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  name,
  type = 'text',
  placeholder,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`w-full px-8 py-3 border border-dark border-opacity-50 rounded-full ${className}`}
      />
      {errors[name] && (
        <span className='text-error text-sm'>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default Input;
