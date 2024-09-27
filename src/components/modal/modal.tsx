import { FC, useEffect } from 'react';
import { RiCloseLargeFill as CloseIcon } from 'react-icons/ri';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-dark bg-opacity-50'>
      <div className='bg-white w-2/3 p-8 relative overflow-y-auto'>
        <button
          onClick={onClose}
          className='absolute top-6 right-6 hover:opacity-75'
        >
          <CloseIcon className='text-lg' />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
