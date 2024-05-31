export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { path: string; extension: string };
  comics: { available: number };
  series: { available: number };
  stories: { available: number };
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
}