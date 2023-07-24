import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { colors } from "../theme";
import AssessmentCriteria from "./AssessmentCriteria";
import LearningOutcomes from "./LearningOutcomes";
import AssessmentTask from "./AssessmentTask";
import Marking from "./Marking";
import AssessingFeedback from "./AssessingFeedback";
import LateSubmission from "./LateSubmission";
import ExtenuatingCircumstances from "./ExtenuatingCircumstances";
import AcademicMisconduct from "./AcademicMisconduct";
import TemplateRow from "./TemplateRow";
import SaveButtons from "./SaveButtons";

interface Assessment {
  title: string;
  content: string | JSX.Element;
}

interface CreateTemplateProps {
  setPage: (page: string) => void;
}

const CreateTemplate: React.FC<CreateTemplateProps> = ({ setPage }) => {
  const courseDummy = {
    title: "Course 1",
    code: "IS3500",
    credits: 4,
    assessments: [
      { title: "Assessment 2", weighting: 50, versions: [1, 2, 3] },
    ],
  };

  const [activeAccordion, setActiveAccordion] = useState<number | null>(1);

  const handleAccordionChange = (index: number) => {
    setActiveAccordion(index);
  };

  const handleNextAccordion = () => {
    setActiveAccordion((prevIndex) => {
      if (prevIndex === 9) {
        // if the active accordion is the last one, close it by setting the activeAccordion to null
        return null;
      } else {
        // otherwise, move to the next accordion
        return prevIndex !== null ? prevIndex + 1 : 0;
      }
    });
  };

  const handlePreviousAccordion = () => {
    setActiveAccordion((prevIndex) => Math.max((prevIndex ?? 0) - 1, 0));
  };

  return (
    <Box
      sx={{
        width: "90%",
        paddingTop: "32px",
      }}
    >
      <React.Fragment>
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
                  New Version
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={1}></TableCell>
              </TableRow>

              <TemplateRow
                title="Assessment Details"
                isExpanded={activeAccordion === 0}
                index={0}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <AssessmentTask />
              </TemplateRow>

              <TemplateRow
                title="Assessment Task"
                isExpanded={activeAccordion === 1}
                index={1}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <AssessmentTask />
              </TemplateRow>

              <TemplateRow
                title="Assessment Criteria"
                index={2}
                isExpanded={activeAccordion === 2}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <AssessmentCriteria />
              </TemplateRow>

              <TemplateRow
                title="Marking"
                isExpanded={activeAccordion === 3}
                index={3}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <Marking />
              </TemplateRow>

              <TemplateRow
                title="Learning Outcomes"
                isExpanded={activeAccordion === 4}
                index={4}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <LearningOutcomes />
              </TemplateRow>

              <TemplateRow
                title="Assessing Feedback"
                isExpanded={activeAccordion === 5}
                index={5}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <AssessingFeedback />
              </TemplateRow>

              <TemplateRow
                title="Late Submissions"
                isExpanded={activeAccordion === 6}
                index={6}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <LateSubmission />
              </TemplateRow>

              <TemplateRow
                title="Extenuating Circumstances"
                isExpanded={activeAccordion === 7}
                index={7}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <ExtenuatingCircumstances />
              </TemplateRow>

              <TemplateRow
                title="Academic Misconduct"
                isExpanded={activeAccordion === 8}
                index={8}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <AcademicMisconduct />
              </TemplateRow>
            </TableBody>
          </Table>
        </TableContainer>
        <SaveButtons setPage={setPage} />
      </React.Fragment>
    </Box>
  );
};

export default CreateTemplate;
