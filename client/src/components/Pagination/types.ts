export interface IPagination {
  className?: string;
  handlePageChange: (pageNum: number) => void;
  limit: number;
  page: number;
  totalCount: number;
}