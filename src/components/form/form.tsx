import { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface FormProps {
  onSubmit: (data: any) => void;
  defaultValues?: any;
  children: ReactNode;
}

const Form: FC<FormProps> = ({ onSubmit, defaultValues, children }) => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='flex flex-col gap-12'
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
