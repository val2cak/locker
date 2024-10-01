import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  BsFillSkipStartFill as PreviousPageIcon,
  BsFillSkipForwardFill as LastPageIcon,
  BsSkipEndFill as NextPageIcon,
  BsSkipBackwardFill as FirstPageIcon,
} from 'react-icons/bs';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

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

  const getPageNumbers = () => {
    const maxVisiblePages = isSmallScreen ? 4 : 5;
    let start = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let end = Math.min(start + maxVisiblePages - 1, totalPages);

    if (end - start + 1 < maxVisiblePages && totalPages >= maxVisiblePages) {
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className='flex py-4 w-full justify-center text-md font-semibold sm:flex-wrap'>
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

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-4 py-0.5 ${
            currentPage === pageNumber
              ? 'bg-primary text-light rounded-full'
              : 'hover:text-primary'
          }`}
        >
          {pageNumber}
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
