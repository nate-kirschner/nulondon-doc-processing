import { useMemo, useState } from "react";
import { CoursePreview } from "../types/courses";

export interface PaginatedTableProps {
  rowsPerPage: number;
  onPageChange: (event: unknown, page: number) => void;
  page: number;
}

interface PaginatedTable {
  paginatedTableProps: PaginatedTableProps;
  visibleRows: CoursePreview[];
  currentPage: number;
  pageSize: number;
}

const usePagination = (rows: CoursePreview[]): PaginatedTable => {
  const rowsPerPage = 20;

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
    currentPage: page + 1,
    pageSize: rowsPerPage,
  };
};

export default usePagination;
