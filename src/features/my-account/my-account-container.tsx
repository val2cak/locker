import Loader from '../../components/loader/loader';
import { useGetSingleUserQuery } from '../../hooks/users-api';
import locale from '../../localization/locale';
import { getUserFromStorage } from '../../services/storage';
import { User } from '../../types/user-types';
import Layout from '../layout';
import DeliveryInfoCard from './components/delivery-info-card';
import PaymentInfoCard from './components/payment-info-card';
import PersonalInfoCard from './components/personal-info-card';
import placeholder from '../../assets/images/user-placeholder.png';

const MyAccountContainer = () => {
  const { myAccount } = locale.myAccount;

  const storedUser = getUserFromStorage();
  const user: User | null = storedUser ? JSON.parse(storedUser) : null;

  const { data: userData, isLoading } = useGetSingleUserQuery(user?.id);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <div className='sm:px-8 lg:px-16 px-40 py-8 gap-8 flex justify-between sm:flex-col'>
          <div className='flex flex-col w-1/2 gap-8 sm:w-full'>
            <span className='font-righteous uppercase text-lg'>
              {myAccount}
            </span>

            <img
              src={userData?.image || placeholder}
              alt={userData?.username}
              className='rounded-full border border-dark border-opacity-10'
              width={100}
              height={100}
              loading='lazy'
            />

            <PersonalInfoCard user={userData || {}} />
          </div>

          <div className='flex flex-col w-1/2 gap-8 justify-between sm:w-full'>
            {userData?.address && (
              <DeliveryInfoCard
                address={userData.address}
                phone={userData.phone}
              />
            )}

            {userData?.bank && <PaymentInfoCard bank={userData.bank} />}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MyAccountContainer;
