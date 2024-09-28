import Logo from '../../components/logo/logo';
import LoginForm from './components/login-form';

const LoginContainer = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-light'>
      <div className='flex flex-col items-center'>
        <Logo size={'w-80'} />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginContainer;
