import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../../../hooks/auth-api';
import { setUserToStorage } from '../../../services/storage';
import Form from '../../../components/form/form';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';
import locale from '../../../localization/locale';

const LoginForm = () => {
  const { username, button, password, signIn } = locale.login;
  const [login, { isError, error }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (formData: { username: string; password: string }) => {
    try {
      const { username, password } = formData;

      const response = await login({
        username,
        password,
      }).unwrap();

      const expiresInMinutes = 60;
      const tokenExpiry = new Date(Date.now() + expiresInMinutes * 60000);

      setUserToStorage({
        username,
        id: response.id,
        token: response.token,
        expiresIn: expiresInMinutes,
        tokenExpiry: tokenExpiry.toISOString(),
      });

      navigate('/');
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div className='bg-white shadow-md p-20 flex flex-col gap-12'>
      <div className='flex flex-col'>
        <span className='text-center text-2xl font-righteous'>{signIn}</span>

        {isError && (
          <span className='text-error font-medium'>
            {(error as any)?.data?.message}
          </span>
        )}
      </div>

      <Form onSubmit={onSubmit} defaultValues={{ username: '', password: '' }}>
        <div className='flex flex-col gap-4'>
          <Input name='username' placeholder={username} />
          <Input name='password' type='password' placeholder={password} />
        </div>
        <Button text={button} type='submit' className='w-full !bg-primary' />
      </Form>
    </div>
  );
};

export default LoginForm;
