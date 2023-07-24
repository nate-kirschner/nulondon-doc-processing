import { Box, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Course from "../types/courses";
import usePagination from "../hooks/usePagination";
import Spacer from "./Spacer";
import CourseTable from "./CourseTable";
import useSearchTable from "../hooks/useSearchTable";
import { colors } from "../theme";
import axios from "axios";

const assessment = { title: "Assessment 1", weighting: 20, versions: [1] };

interface BrowseCourseProps {
  setPage: (page:string) => void;
}

const BrowseCourses: React.FC<BrowseCourseProps> = ({
  setPage,
}) => {
  const rows: Course[] = [
    {
      title: "Course 1",
      code: "IS3500",
      credits: 4,
      assessments: [
        assessment,
        { title: "Assessment 2", weighting: 50, versions: [1, 2, 3] },
      ],
    },
    {
      title: "course 2",
      code: "IS3501",
      credits: 4,
      assessments: [assessment],
    },
    {
      title: "course 3",
      code: "IS3502",
      credits: 4,
      assessments: [assessment],
    },
    {
      title: "course 4",
      code: "IS3503",
      credits: 4,
      assessments: [assessment],
    },
    {
      title: "course 5",
      code: "IS3504",
      credits: 4,
      assessments: [assessment],
    },
    {
      title: "course 6",
      code: "IS3505",
      credits: 4,
      assessments: [assessment],
    },
  ];

  const [filteredRows, setFilteredRows] = useState<Course[]>(rows);

  const { value, onChange } = useSearchTable(rows, setFilteredRows);

  const { paginatedTableProps, visibleRows } = usePagination(filteredRows);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await axios.get("http://127.0.0.1:8000/courses/");
  //     console.log("data", data);
  //   };

  //   getData();
  // }, []);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        justifyContent: "center",
        display: "flex",
        width: "100%",
        maxWidth: "1440px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          marginX: [3, 5, 10],
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Spacer height={"48px"} />
        <Input
          value={value}
          onChange={onChange}
          placeholder="Search course titles or codes"
          sx={{
            ":before": {
              borderBottomColor: colors.red,
            },
            ":after": {
              borderBottomColor: colors.red,
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottomColor: colors.red,
            },
          }}
        />
        <Spacer height={"16px"} />
        <CourseTable
          rows={visibleRows}
          totalRows={filteredRows.length}
          paginatedTableProps={paginatedTableProps}
          setPage={setPage}
        />
      </Box>
    </Box>
  );
};

export default BrowseCourses;
