import {
  MenuItem,
  Select,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { colors } from "../../theme";
import React from "react";
import dayjs from "dayjs";
import ApprovalButtons from "./ApprovalButtons";

const ApprovalSection: React.FC = () => {
  return (
    <React.Fragment>
      <TableContainer>
        <Table
          sx={{
            fontSize: "18px",
            fontFamily: "lato",
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: colors.red,
              },
              "&.Mui-focused fieldset": {
                borderColor: colors.red,
              },
            },
          }}
        >
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Approval Status
            </TableCell>
            <TableCell align="right">
              <Select label="" size="small" fullWidth>
                <MenuItem value={"Approved"}>Approved</MenuItem>
                <MenuItem value={"Denied"}>Denied</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Date
            </TableCell>
            <TableCell align="right">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Approval Date" defaultValue={dayjs()} readOnly />
              </LocalizationProvider>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" sx={{ fontWeight: "bold" }}>
              Comments
            </TableCell>
            <TableCell align="right">
              <TextField
                variant="outlined"
                size="small"
                multiline
                rows={4}
                fullWidth
              />
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default ApprovalSection;
