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
  Typography,
} from "@mui/material";
import { colors } from "../theme";
import LearningOutcomes from "./TemplatePage/LearningOutcomes";
import AssessmentTask from "./TemplatePage/AssessmentTask";
import Marking from "./TemplatePage/Marking";
import AssessingFeedback from "./TemplatePage/AssessingFeedback";
import LateSubmission from "./TemplatePage/LateSubmission";
import ExtenuatingCircumstances from "./TemplatePage/ExtenuatingCircumstances";
import AcademicMisconduct from "./TemplatePage/AcademicMisconduct";
import TemplateRow from "./TemplateRow";
import SaveButtons from "./SaveButtons";
import MockSendApproverEmail from "./TemplatePage/MockSendApproverEmail";
import CSRFToken from "./csrftoken";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { NewVersion } from "../types/newVersion";
import {
  AssessmentCriteria,
  AssessmentDetails,
  Template,
} from "../types/template";
import AssessmentDetailsComponent from "./TemplatePage/AssessmentDetails";
import AssessmentCriteriaComponent from "./TemplatePage/AssessmentCriteria";
import { LearningOutcomeSections } from "../types/learningOutcome";
import AddApprovers from "./TemplatePage/AddApprovers";
import { useNavigate } from "react-router-dom";

const CreateTemplate: React.FC = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [newVersion, setNewVersion] = useState<NewVersion | undefined>();
  const [searchParams] = useSearchParams();

  const getCode = searchParams.get("courseId");

  const getAE = searchParams.get("assessmentId");

  // useStates for each template section
  const [assessmentDetails, setAssessmentDetails] =
    useState<AssessmentDetails>();

  const [assessmentTask, setAssessmentTask] = useState<string>();

  const [assessmentCriteria, setAssessmentCriteria] =
    useState<AssessmentCriteria>();

  const [marking, setMarking] = useState<string>();

  const [assessingFeedback, setAssessingFeedback] = useState<string>();

  const [lateSubmission, setLateSubmission] = useState<string>();

  const [extenuatingCircumstances, setExtenuatingCircumstances] =
    useState<string>();

  const [academicMisconduct, setAcademicMisconduct] = useState<string>();

  const [learningOutcome, setLearningOutcome] =
    useState<LearningOutcomeSections>();

  const [approvers, setApprovers] = useState<number[]>([]);

  // handles accordion open and close
  const handleNextAccordion = () => {
    setActiveAccordion((prevIndex) => Math.min((prevIndex ?? 0) + 1, 10));
  };

  const handlePreviousAccordion = () => {
    setActiveAccordion((prevIndex) => Math.max((prevIndex ?? 0) - 1, 0));
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://127.0.0.1:8000/new_version/" + getCode + "/" + getAE + "/"
        );
        setLoading(false);
        setNewVersion(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [getCode, getAE]);

  const handleSave = async () => {
    if (
      assessmentDetails === undefined ||
      assessmentTask === undefined ||
      assessmentCriteria === undefined ||
      marking === undefined ||
      learningOutcome === undefined ||
      assessingFeedback === undefined ||
      lateSubmission === undefined ||
      extenuatingCircumstances === undefined ||
      academicMisconduct === undefined
    ) {
      alert("Please fill in all fields");
      return;
    }
    const template: Template = {
      assessmentDetails: assessmentDetails,
      assessmentTask: assessmentTask,
      assessmentCriteria: assessmentCriteria,
      marking: marking,
      learningOutcomes: learningOutcome,
      assessingFeedback: assessingFeedback,
      lateSubmissions: lateSubmission,
      extenuatingCircumstances: extenuatingCircumstances,
      academicMisconduct: academicMisconduct,
    };
    try {
      await axios.post(
        `http://127.0.0.1:8000/save-new-template/${getCode}/${getAE}/`,
        { template, approvers }
      );
      navigate("/");
    } catch (e) {
      alert("Oops, something went wrong");
    }
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
            {loading ? (
              <Box sx={{ backgroundColor: colors.gray, padding: "24px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    textAlign: "center",
                    color: colors.black,
                  }}
                >
                  Loading...
                </Typography>
              </Box>
            ) : (
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
                  <AssessmentDetailsComponent
                    newVersion={newVersion}
                    setAssessmentDetails={setAssessmentDetails}
                  />
                </TemplateRow>

                <TemplateRow
                  title="Assessment Task"
                  isExpanded={activeAccordion === 1}
                  index={1}
                  handleNextAccordion={handleNextAccordion}
                  handlePreviousAccordion={handlePreviousAccordion}
                  setActiveAccordion={setActiveAccordion}
                >
                  <AssessmentTask setAssessmentTask={setAssessmentTask} />
                </TemplateRow>

                <TemplateRow
                  title="Assessment Criteria"
                  index={2}
                  isExpanded={activeAccordion === 2}
                  handleNextAccordion={handleNextAccordion}
                  handlePreviousAccordion={handlePreviousAccordion}
                  setActiveAccordion={setActiveAccordion}
                >
                  <AssessmentCriteriaComponent
                    setAssessmentCriteria={setAssessmentCriteria}
                  />
                </TemplateRow>

                <TemplateRow
                  title="Marking"
                  isExpanded={activeAccordion === 3}
                  index={3}
                  handleNextAccordion={handleNextAccordion}
                  handlePreviousAccordion={handlePreviousAccordion}
                  setActiveAccordion={setActiveAccordion}
                >
                  <Marking setMarking={setMarking} />
                </TemplateRow>

                <TemplateRow
                  title="Learning Outcomes"
                  isExpanded={activeAccordion === 4}
                  index={4}
                  handleNextAccordion={handleNextAccordion}
                  handlePreviousAccordion={handlePreviousAccordion}
                  setActiveAccordion={setActiveAccordion}
                >
                  <LearningOutcomes
                    newVersion={newVersion}
                    setLearningOutcomes={setLearningOutcome}
                  />
                </TemplateRow>

                <TemplateRow
                  title="Assessing Feedback"
                  isExpanded={activeAccordion === 5}
                  index={5}
                  handleNextAccordion={handleNextAccordion}
                  handlePreviousAccordion={handlePreviousAccordion}
                  setActiveAccordion={setActiveAccordion}
                >
                  <AssessingFeedback
                    setAssessingFeedback={setAssessingFeedback}
                  />
                </TemplateRow>

                <TemplateRow
                  title="Late Submissions"
                  isExpanded={activeAccordion === 6}
                  index={6}
                  handleNextAccordion={handleNextAccordion}
                  handlePreviousAccordion={handlePreviousAccordion}
                  setActiveAccordion={setActiveAccordion}
                >
                  <LateSubmission setLateSubmission={setLateSubmission} />
                </TemplateRow>

                <TemplateRow
                  title="Extenuating Circumstances"
                  isExpanded={activeAccordion === 7}
                  index={7}
                  handleNextAccordion={handleNextAccordion}
                  handlePreviousAccordion={handlePreviousAccordion}
                  setActiveAccordion={setActiveAccordion}
                >
                  <ExtenuatingCircumstances
                    setExtenuatingCircumstances={setExtenuatingCircumstances}
                  />
                </TemplateRow>

                <TemplateRow
                  title="Academic Misconduct"
                  isExpanded={activeAccordion === 8}
                  index={8}
                  handleNextAccordion={handleNextAccordion}
                  handlePreviousAccordion={handlePreviousAccordion}
                  setActiveAccordion={setActiveAccordion}
                >
                  <AcademicMisconduct
                    setAcademicMisconduct={setAcademicMisconduct}
                  />
                </TemplateRow>
                <TemplateRow
                  title="Add Approvers"
                  isExpanded={activeAccordion === 9}
                  index={9}
                  handleNextAccordion={handleNextAccordion}
                  handlePreviousAccordion={handlePreviousAccordion}
                  setActiveAccordion={setActiveAccordion}
                >
                  <AddApprovers setApprovers={setApprovers} />
                  <CSRFToken />
                </TemplateRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <SaveButtons handleSave={handleSave} />
      </React.Fragment>
    </Box>
  );
};

export default CreateTemplate;
