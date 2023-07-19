import { useMemo, useState } from "react";
import Course from "../types/courses";

export interface PaginatedTableProps {
  rowsPerPage: number;
  onPageChange: (event: unknown, page: number) => void;
  page: number;
}

interface PaginatedTable {
  paginatedTableProps: PaginatedTableProps;
  visibleRows: Course[];
}

const usePagination = (rows: Course[]): PaginatedTable => {
  const rowsPerPage = 10;

  const [page, setPage] = useState(0);

  const onPageChange = (_event: unknown, page: number) => {
    setPage(page);
  };

  const visibleRows = useMemo(() => {
    return rows.filter((_row, index) => {
      return index >= page * rowsPerPage && index < (page + 1) * rowsPerPage;
    });
  }, [page, rows]);

  return {
    paginatedTableProps: {
      rowsPerPage,
      onPageChange,
      page,
    },
    visibleRows,
  };
};

export default usePagination;