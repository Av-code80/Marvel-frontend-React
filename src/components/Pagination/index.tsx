import React from 'react';
import { Alignment, Button, Emphasis, FlexBox, Size } from '@lumx/react';
import { PaginationProps } from '../../common/types/interface';
import PaginationButton from './PaginationButton';
import { generatePageNumbers } from './PaginationHelper';
import './index.scss';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalResults,
  resultsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const pageNumbers = generatePageNumbers(currentPage, totalPages);
  return (
    <FlexBox
      as='section'
      orientation='horizontal'
      hAlign={Alignment.center}
      vAlign={Alignment.center}
      className='pagination'
      aria-label='Pagination'
    >
      <Button
        size={Size.s}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label='Previous Page'
      >
        &lt;
      </Button>
      {pageNumbers.map(page =>
        typeof page === 'number' ? (
          <PaginationButton
            key={page}
            page={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ) : (
          <span key={page} aria-hidden='true'>
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
    </FlexBox>
  );
};

export default Pagination;
