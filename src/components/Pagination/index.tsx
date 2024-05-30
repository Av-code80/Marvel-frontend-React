import React from 'react';
import './index.scss';
import { Button, Emphasis, Size } from '@lumx/react';


interface PaginationProps {
  currentPage: number;
  totalResults: number;
  resultsPerPage: number;
  theme: any;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalResults,
  resultsPerPage,
  theme,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const generatePageNumbers = (): (number | string)[] => {
    const pageNumbers: (number | string)[] = [];
    const maxPageButtons = 5;

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('...');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className='pagination'>
      <Button
        size={Size.s}
        theme={theme}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </Button>
      {generatePageNumbers().map((page, index) =>
        typeof page === 'number' ? (
          <Button
            emphasis={Emphasis.medium}
            size={Size.s}
            theme={theme}
            key={index}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ) : (
          <span key={index}>...</span>
        ),
      )}
      <Button
        size={Size.s}
        theme={theme}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </Button>
    </div>
  );
};

export default Pagination;
