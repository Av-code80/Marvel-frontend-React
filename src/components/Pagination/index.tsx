import React from 'react';
import './index.scss';
import { Button, Size } from '@lumx/react';
import { PaginationProps } from '../../common/types/interface';
import PaginationButton from './PaginationButton';
import { generatePageNumbers } from './PaginationHelper';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalResults,
  resultsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <nav className='pagination' aria-label='Pagination'>
      <Button
        size={Size.s}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label='Previous Page'
      >
        &lt;
      </Button>
      {pageNumbers.map((page, index) =>
        typeof page === 'number' ? (
          <PaginationButton
            key={index}
            page={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ) : (
          <span key={index} aria-hidden='true'>
            ...
          </span>
        ),
      )}
      <Button
        size={Size.s}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label='Next Page'
      >
        &gt;
      </Button>
    </nav>
  );
};

export default Pagination;
