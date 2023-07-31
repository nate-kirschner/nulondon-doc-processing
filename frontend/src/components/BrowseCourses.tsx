import { Box, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CoursePreview } from "../types/courses";
import { AssessmentPreview } from "../types/assessments";
import usePagination from "../hooks/usePagination";
import Spacer from "./Spacer";
import CourseTable from "./CoursesTable/CourseTable";
import useSearchTable from "../hooks/useSearchTable";
import { colors } from "../theme";
import axios from "axios";

const BrowseCourses: React.FC = () => {
  const [allRows, setAllRows] = useState<CoursePreview[]>([]);
  const [filteredRows, setFilteredRows] = useState<CoursePreview[]>(allRows);

  const { value, onChange } = useSearchTable(allRows, setFilteredRows);

  const { paginatedTableProps, visibleRows, pageSize, currentPage } =
    usePagination(filteredRows);

  const [totalRows, setTotalRows] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://127.0.0.1:8000/courses/`);
        setLoading(false);
        setAllRows(response.data);
        setTotalRows(response.data.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredRows(allRows);
  }, [allRows]);

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
        { loading ? 
        <Box sx={{ backgroundColor: colors.gray, padding: "24px" }}>
          <Typography sx={{ fontSize: "16px", textAlign: "center", color: colors.black }}>Loading...</Typography>
        </Box> 
        : <CourseTable
            rows={visibleRows}
            totalRows={filteredRows.length}
            paginatedTableProps={paginatedTableProps}
          /> 
        }
      </Box> 
    </Box>
  );
};

export default BrowseCourses;
