import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { FilledTemplate, TemplateStatus } from "../types/template";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { colors } from "../theme";
import Spacer from "./Spacer";
import { NewVersion } from "../types/newVersion";
import TemplateRow from "./TemplateRow";
import AssessmentDetailsApproval from "./ApprovalPages/AssessmentDetailsApproval";
import AssessmentCriteriaApproval from "./ApprovalPages/AssessmentCriteriaApproval";
import LearningOutcomesApproval from "./ApprovalPages/LearningOutcomesApproval";
import { useNavigate } from "react-router-dom";

type UpdateTemplateStatusButtonProp = {
  hashed_email: string | null;
  template_id: string | null;
  new_status: TemplateStatus;
  navigateHome: () => void;
};

const FilledTemplateComponent: React.FC = () => {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [newVersion, setNewVersion] = useState<NewVersion | undefined>();
  const [searchParams] = useSearchParams();
  const hashed_email = searchParams.get("approver");
  const template_id = searchParams.get("templateID");
  const [filledTemplateData, setFilledTemplateData] =
    useState<FilledTemplate>();

  useEffect(() => {
    console.log("template", filledTemplateData);
  }, [filledTemplateData]);

  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const ep = "http://127.0.0.1:8000/template-by-id/" + template_id + "/";
        const response = await axios.get(ep);
        setFilledTemplateData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTemplateData();
  }, [template_id]);

  if (!filledTemplateData) {
    return <div>Loading...</div>;
  }

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
        <TableContainer>
          <Table>
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
                  Assessment Information
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow sx={{ backgroundColor: "#FFFFFF" }}>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Assessment ID:
                </TableCell>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {filledTemplateData.id}
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#FFFFFF" }}>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Assessment Version:
                </TableCell>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {filledTemplateData.version}
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#FFFFFF" }}>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Assessment Key:
                </TableCell>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {filledTemplateData.assessment_key}
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#FFFFFF" }}>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Course Code:
                </TableCell>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {filledTemplateData.course_code}
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#FFFFFF" }}>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  Assessment Status:
                </TableCell>
                <TableCell
                  sx={{
                    paddingX: "24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {filledTemplateData.status}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

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
                  Template Information
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
                <AssessmentDetailsApproval
                  assessmentDetails={
                    filledTemplateData.template.assessmentDetails
                  }
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
                {filledTemplateData.template.assessmentTask}
              </TemplateRow>

              <TemplateRow
                title="Assessment Criteria"
                index={2}
                isExpanded={activeAccordion === 2}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <AssessmentCriteriaApproval
                  assessmentCriteria={
                    filledTemplateData.template.assessmentCriteria.gradeRanges
                  }
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
                {filledTemplateData.template.marking}
              </TemplateRow>

              <TemplateRow
                title="Learning Outcomes"
                isExpanded={activeAccordion === 4}
                index={4}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                <LearningOutcomesApproval
                  learningObjectives={
                    filledTemplateData.template.learningOutcomes
                  }
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
                {filledTemplateData.template.assessingFeedback}
              </TemplateRow>

              <TemplateRow
                title="Late Submissions"
                isExpanded={activeAccordion === 6}
                index={6}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                {filledTemplateData.template.lateSubmissions}
              </TemplateRow>

              <TemplateRow
                title="Extenuating Circumstances"
                isExpanded={activeAccordion === 7}
                index={7}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                {filledTemplateData.template.extenuatingCircumstances}
              </TemplateRow>

              <TemplateRow
                title="Academic Misconduct"
                isExpanded={activeAccordion === 8}
                index={8}
                handleNextAccordion={handleNextAccordion}
                handlePreviousAccordion={handlePreviousAccordion}
                setActiveAccordion={setActiveAccordion}
              >
                {filledTemplateData.template.academicMisconduct}
              </TemplateRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Spacer height={"24px"} />
        <Box
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <UpdateTemplateStatusButton
            hashed_email={hashed_email}
            template_id={template_id}
            new_status={TemplateStatus.APPROVED}
            navigateHome={() => navigate("/")}
          />
          <Spacer width={"24px"} />
          <UpdateTemplateStatusButton
            hashed_email={hashed_email}
            template_id={template_id}
            new_status={TemplateStatus.REJECTED}
            navigateHome={() => navigate("/")}
          />
        </Box>
      </React.Fragment>
      <Spacer height={"64px"} />
    </Box>
  );
};

const UpdateTemplateStatusButton: React.FC<UpdateTemplateStatusButtonProp> = ({
  hashed_email,
  template_id,
  new_status,
  navigateHome,
}) => {
  const handleClick = () => {
    const url =
      "http://127.0.0.1:8000/update-template-status/" +
      hashed_email +
      "/" +
      template_id +
      "/";
    const data = { status: new_status };

    axios
      .post(url, data, {
        headers: {
          "Content-Type": "appication/json",
        },
      })
      .then(() => {
        navigateHome();
      })
      .catch((error) => {
        console.log("Error Approving Assessment: ", error);
        alert("Oops, something went wrong");
      });
  };
  return (
    <Box>
      <Button
        sx={{
          color: colors.white,
          backgroundColor: colors.red,
          height: "max-content",
          padding: "12px",
          marginTop: "10px",
          "&:hover": {
            backgroundColor: colors.red,
            opacity: 0.8,
          },
        }}
        onClick={handleClick}
      >
        {" "}
        {new_status}{" "}
      </Button>
    </Box>
  );
};

export default FilledTemplateComponent;
