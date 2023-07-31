import React, { useEffect, useState } from "react";
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
import { colors } from "../theme";
import AssessmentCriteria from "./TemplatePage/AssessmentCriteria";
import LearningOutcomes from "./TemplatePage/LearningOutcomes";
import AssessmentTask from "./TemplatePage/AssessmentTask";
import Marking from "./TemplatePage/Marking";
import AssessingFeedback from "./TemplatePage/AssessingFeedback";
import LateSubmission from "./TemplatePage/LateSubmission";
import ExtenuatingCircumstances from "./TemplatePage/ExtenuatingCircumstances";
import AcademicMisconduct from "./TemplatePage/AcademicMisconduct";
import TemplateRow from "./TemplateRow";
import SaveButtons from "./SaveButtons";
import AssessmentDetails from "./TemplatePage/AssessmentDetails";
import MockSendApproverEmail from "./TemplatePage/MockSendApproverEmail";
import CSRFToken from "./csrftoken";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { NewVersion } from "../types/newVersion";
import { Template } from "../types/template";

const CreateTemplate: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [newVersion, setNewVersion] = useState<NewVersion | undefined>();
  const [searchParams] = useSearchParams();

  const getCode = searchParams.get("courseId");

  const getAE = searchParams.get("assessmentId");

  const handleNextAccordion = () => {
    setActiveAccordion((prevIndex) => Math.min((prevIndex ?? 0) + 1, 0));
  };

  const handlePreviousAccordion = () => {
    setActiveAccordion((prevIndex) => Math.max((prevIndex ?? 0) - 1, 0));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/new_version/" + getCode + "/" + getAE + "/"
        );
        setNewVersion(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
                <AssessmentDetails newVersion={newVersion} />
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
                <LearningOutcomes newVersion={newVersion} />
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

              <TemplateRow
                title="Send Approver Email"
                isExpanded={activeAccordion === 9}
                index={9}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <CSRFToken />
                <MockSendApproverEmail />
              </TemplateRow>
            </TableBody>
          </Table>
        </TableContainer>
        <SaveButtons />
      </React.Fragment>
    </Box>
  );
};

export default CreateTemplate;
