import { FC, useState } from 'react';
import {
  HiOutlinePlus as PlusIcon,
  HiOutlineMinus as MinusIcon,
} from 'react-icons/hi2';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSection = () => setIsOpen(!isOpen);

  return (
    <div className='py-2'>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={toggleSection}
      >
        <span className='text-md font-medium uppercase'>{title}</span>
        {isOpen ? (
          <MinusIcon className='text-xl' />
        ) : (
          <PlusIcon className='text-xl' />
        )}
      </div>
      {isOpen && <div className='flex flex-col gap-3'>{children}</div>}
    </div>
  );
};

export default Section;
