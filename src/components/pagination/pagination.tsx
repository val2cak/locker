import React from 'react';
import {
  BsFillSkipStartFill as PreviousPageIcon,
  BsFillSkipForwardFill as LastPageIcon,
  BsSkipEndFill as NextPageIcon,
  BsSkipBackwardFill as FirstPageIcon,
} from 'react-icons/bs';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const goToNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const goToFirstPage = () => {
    onPageChange(1);
  };

  const goToLastPage = () => {
    onPageChange(totalPages);
  };

  return (
    <div className='flex py-4 w-full justify-center text-md font-semibold sm:flex-col'>
      <button
        onClick={goToFirstPage}
        disabled={currentPage === 1}
        className={`mx-2 ${
          currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-primary'
        }`}
      >
        <FirstPageIcon className='text-lg' />
      </button>

      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className={`mx-2 ${
          currentPage === 1 ? 'cursor-not-allowed' : 'hover:text-primary'
        }`}
      >
        <PreviousPageIcon className='text-lg' />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-0.5 ${
            currentPage === index + 1
              ? 'bg-primary text-light rounded-full'
              : 'hover:text-primary'
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`mx-2 ${
          currentPage === totalPages
            ? 'cursor-not-allowed'
            : 'hover:text-primary'
        }`}
      >
        <NextPageIcon className='text-lg' />
      </button>

      <button
        onClick={goToLastPage}
        disabled={currentPage === totalPages}
        className={`mx-2 ${
          currentPage === totalPages
            ? 'cursor-not-allowed'
            : 'hover:text-primary'
        }`}
      >
        <LastPageIcon className='text-lg' />
      </button>
    </div>
  );
};

export default Pagination;
