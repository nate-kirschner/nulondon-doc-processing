import { useMemo, useState } from "react";
import Course from "../types/courses";

interface PaginatedTable {
  paginatedTableProps: {
    rowsPerPage: number;
    onPageChange: (event: unknown, page: number) => void;
    page: number;
  };
  visibleRows: Course[];
}

const usePagination = (rows: Course[]): PaginatedTable => {
  const rowsPerPage = 2;

  const [page, setPage] = useState(1);

  const onPageChange = (event: unknown, page: number) => {
    setPage(page);
  };

  const visibleRows = useMemo(() => {
    return rows.filter((row, index) => {
      return index >= page * rowsPerPage && index < (page + 1) * rowsPerPage;
    });
  }, [page]);

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
