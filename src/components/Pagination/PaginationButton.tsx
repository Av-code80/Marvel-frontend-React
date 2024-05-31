import React from 'react';
import { Button, Emphasis, Size } from '@lumx/react';

interface PaginationButtonProps {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  page,
  currentPage,
  onPageChange,
}) => {
  return (
    <Button
      emphasis={Emphasis.medium}
      size={Size.s}
      onClick={() => onPageChange(page)}
      className={currentPage === page ? 'active' : ''}
      aria-current={currentPage === page ? 'page' : undefined}
    >
      {page}
    </Button>
  );
};

export default PaginationButton;
