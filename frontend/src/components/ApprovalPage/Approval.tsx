import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { colors } from "../../theme";
import TemplateRow from "../TemplateRow";
import ApprovalSection from "./ApprovalSection";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import ApprovalButtons from "./ApprovalButtons";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  section: {
    margin: 2,
    padding: 10,
    flexGrow: 1,
  },
});

const ApprovalTable: React.FC = () => {
  return (
    <Box
      sx={{
        width: "90%",
        paddingTop: "32px",
      }}
    >
      <React.Fragment>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}></View>
          </Page>
        </Document>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: colors.gray }}>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "20px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Approval Information
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ApprovalSection />
            </TableBody>
          </Table>
        </TableContainer>
        <ApprovalButtons />
      </React.Fragment>
    </Box>
  );
};

export default ApprovalTable;
// ReactPDF.renderToStream(<ApprovalTable />);
