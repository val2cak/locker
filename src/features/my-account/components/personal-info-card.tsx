import { FC } from 'react';

import { User } from '../../../types/user-types';
import locale from '../../../localization/locale';
import CardItem from './card-item';

interface Props {
  user: User;
}

const PersonalInfoCard: FC<Props> = ({ user }) => {
  const {
    personalInfo,
    firstName,
    lastName,
    email,
    username,
    age,
    gender,
    birthDate,
  } = locale.myAccount;

  return (
    <div className='bg-light p-9 flex flex-col gap-2'>
      <span className='text-md font-semibold uppercase'>{personalInfo}</span>

      <CardItem label={firstName} value={user.firstName} />

      <CardItem label={lastName} value={user.lastName} />

      <CardItem label={email} value={user.email} />

      <CardItem label={username} value={user.username} />

      <CardItem label={age} value={user.age} />

      <CardItem label={gender} value={user.gender} />

      <CardItem
        label={birthDate}
        value={new Date(user.birthDate).toLocaleDateString()}
      />
    </div>
  );
};

export default PersonalInfoCard;
