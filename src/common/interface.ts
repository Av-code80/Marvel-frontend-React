export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Record<'path' | 'extension', string>;
  comics: Record<'available', number>;
  series: Record<'available', number>;
  stories: Record<'available', number>;
}

export interface PaginationProps {
  currentPage: number;
  totalResults: number;
  resultsPerPage: number;
  onPageChange: (page: number) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalResults: number;
  resultsPerPage: number;
  onPageChange: (page: number) => void;
  theme: any;
}

