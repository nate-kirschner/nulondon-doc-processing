import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { CoursePreview } from "../../types/courses";
import { PaginatedTableProps } from "../../hooks/usePagination";
import AssessmentRow from "./AssessmentRow";
import { colors } from "../../theme";

interface CourseTableProps {
  rows: CoursePreview[];
  totalRows: number;
  paginatedTableProps: PaginatedTableProps;
}

const CourseTable: React.FC<CourseTableProps> = ({
  rows,
  totalRows,
  paginatedTableProps,
}) => {
  const [openRow, setOpenRow] = useState<number | undefined>(undefined);

  const handleChange =
    (panelIndex: number) =>
    (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setOpenRow(newExpanded ? panelIndex : undefined);
    };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: colors.gray }}>
              <TableCell
                sx={{ paddingX: "24px", fontSize: "20px", fontWeight: 700 }}
              >
                Course Name
              </TableCell>
              <TableCell
                align="right"
                sx={{ paddingX: "24px", fontSize: "20px", fontWeight: 700 }}
              >
                Course Code
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <React.Fragment>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Accordion
                      expanded={openRow === index}
                      onChange={handleChange(index)}
                    >
                      <AccordionSummary>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Typography sx={{ fontSize: "18px" }}>
                            {row.title}
                          </Typography>
                          <Typography sx={{ fontSize: "18px" }}>
                            {row.code}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        {row.assessments.map((assessment) => {
                          return (
                            <AssessmentRow
                              assessmentId={assessment.id}
                              courseId={row.code}
                              {...assessment}
                            />
                          );
                        })}
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
              </React.Fragment>
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
