import { FC } from 'react';

import { Bank } from '../../../types/user-types';
import locale from '../../../localization/locale';
import CardItem from './card-item';

interface PaymentInfoCardProps {
  bank: Bank;
}

const PaymentInfoCard: FC<PaymentInfoCardProps> = ({ bank }) => {
  const { cardExpire, cardNumber, cardType, paymentInfo } = locale.myAccount;

  return (
    <div className='bg-primary p-9 flex flex-col gap-2'>
      <span className='text-md font-semibold uppercase'>{paymentInfo}</span>

      <CardItem label={cardExpire} value={bank.cardExpire} />

      <CardItem label={cardNumber} value={bank.cardNumber} />

      <CardItem label={cardType} value={bank.cardType} />
    </div>
  );
};

export default PaymentInfoCard;
