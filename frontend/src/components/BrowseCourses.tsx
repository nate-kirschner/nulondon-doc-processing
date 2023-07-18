import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Flex } from "theme-ui";
import Course from "../types/courses";
import usePagination from "../hooks/usePagination";

const BrowseCourses: React.FC = () => {
  const rows: Course[] = [
    { title: "course 1", code: "IS3500", credits: 4 },
    { title: "course 2", code: "IS3501", credits: 4 },
    { title: "course 3", code: "IS3502", credits: 4 },
    { title: "course 4", code: "IS3503", credits: 4 },
    { title: "course 5", code: "IS3504", credits: 4 },
    { title: "course 6", code: "IS3505", credits: 4 },
  ];

  const { paginatedTableProps, visibleRows } = usePagination(rows);

  return (
    <Flex
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <TableContainer component={Paper} sx={{ width: ["90%", 650] }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell align="right">Course Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row) => (
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
        rowsPerPageOptions={[2]}
        component="div"
        count={rows.length}
        {...paginatedTableProps}
      />
    </Flex>
  );
};

export default BrowseCourses;
