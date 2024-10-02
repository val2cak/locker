import { FC, useEffect, useRef } from 'react';
import { RiCloseLargeFill as CloseIcon } from 'react-icons/ri';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-dark bg-opacity-50 sm:w-full sm:h-full sm:items-start md:w-full md:h-full md:items-start'>
      <div
        ref={modalRef}
        className='bg-white w-2/3 sm:w-full md:w-full h-auto sm:h-full p-8 relative overflow-y-auto sm:overflow-y-scroll sm:px-6 sm:py-16 md:overflow-y-scroll md:px-6 md:py-16 md:h-full'
      >
        <button
          onClick={onClose}
          className='absolute top-6 right-6 hover:opacity-75 sm:z-50'
        >
          <CloseIcon className='text-lg' />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
