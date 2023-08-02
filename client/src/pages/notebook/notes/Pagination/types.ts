export interface IPagination {
  handlePageChange: (pageNum: number) => void;
  limit: number;
  page: number;
  totalCount: number;
}