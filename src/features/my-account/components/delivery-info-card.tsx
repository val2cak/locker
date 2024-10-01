import { FC } from 'react';

import { Address } from '../../../types/user-types';
import locale from '../../../localization/locale';
import CardItem from './card-item';

interface DeliveryInfoCardProps {
  address: Address;
  phone: string | null;
}

const DeliveryInfoCard: FC<DeliveryInfoCardProps> = ({ address, phone }) => {
  const { deliveryInfo, addressLbl, city, state, country, phoneLbl } =
    locale.myAccount;

  return (
    <div className='bg-dark p-9 text-light flex flex-col gap-2'>
      <span className='text-md font-semibold uppercase'>{deliveryInfo}</span>

      <CardItem label={addressLbl} value={address.address} />

      <CardItem label={city} value={address.city} />

      <CardItem label={state} value={address.state} />

      <CardItem label={country} value={address.country} />

      <CardItem label={phoneLbl} value={phone} />
    </div>
  );
};

export default DeliveryInfoCard;
