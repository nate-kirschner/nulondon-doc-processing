import { Box, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import Course from "../types/courses";
import usePagination from "../hooks/usePagination";
import Spacer from "./Spacer";
import CourseTable from "./CourseTable";
import useSearchTable from "../hooks/useSearchTable";

const BrowseCourses: React.FC = () => {
  const rows: Course[] = [
    { title: "course 1", code: "IS3500", credits: 4 },
    { title: "course 2", code: "IS3501", credits: 4 },
    { title: "course 3", code: "IS3502", credits: 4 },
    { title: "course 4", code: "IS3503", credits: 4 },
    { title: "course 5", code: "IS3504", credits: 4 },
    { title: "course 6", code: "IS3505", credits: 4 },
  ];

  const [filteredRows, setFilteredRows] = useState<Course[]>(rows);

  const { value, onChange } = useSearchTable(rows, setFilteredRows);

  const { paginatedTableProps, visibleRows } = usePagination(filteredRows);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        justifyContent: "center",
        display: "flex",
        maxWidth: "1440px",
        paddingX: [3, 5, 10],
      }}
    >
      <Box
        sx={{
          width: ["100%"],
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Spacer height={"48px"} />
        <Input
          value={value}
          onChange={onChange}
          placeholder="Search course titles or codes"
        />
        <CourseTable
          rows={visibleRows}
          totalRows={filteredRows.length}
          paginatedTableProps={paginatedTableProps}
        />
      </Box>
    </Box>
  );
};

export default BrowseCourses;
