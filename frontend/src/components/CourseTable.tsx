import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import Course from "../types/courses";
import { PaginatedTableProps } from "../hooks/usePagination";

interface CourseTableProps {
  rows: Course[];
  totalRows: number;
  paginatedTableProps: PaginatedTableProps;
}

const CourseTable: React.FC<CourseTableProps> = ({
  rows,
  totalRows,
  paginatedTableProps,
}) => {
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell align="right">Course Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.code}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.code}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[paginatedTableProps.rowsPerPage]}
        component="div"
        count={totalRows}
        {...paginatedTableProps}
      />
    </React.Fragment>
  );
};

export default CourseTable;
