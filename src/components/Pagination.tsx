import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

type PaginationProps = {
  page: number;
  perPage: number;
  setPage: (newPage: number) => VoidFunction;
  setPerPage: (newPage: number) => VoidFunction;
  fetchNextPage: VoidFunction;
  hasNextPage: boolean;
};

export default function Pagination({
  page,
  perPage,
  setPage,
  setPerPage,
  fetchNextPage,
  hasNextPage,
}: PaginationProps) {
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!hasNextPage) return;
    setPage(newPage);
    fetchNextPage();
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={perPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
