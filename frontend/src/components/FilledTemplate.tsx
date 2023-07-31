import { Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { FilledTemplate, TemplateStatus } from "../types/template";
import React, { useEffect, useState } from "react";
import axios from "axios";

type UpdateTemplateStatusButtonProp = {
  hashed_email: string | null;
  template_id: string | null;
  new_status: TemplateStatus;
};

const FilledTemplateComponent: React.FC = () => {
  const [searchParams] = useSearchParams();
  const hashed_email = searchParams.get("approver");
  const template_id = searchParams.get("templateID");
  const [filledTemplateData, setFilledTemplateData] =
    useState<FilledTemplate>();

  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const ep = "http://127.0.0.1:8000/template/" + template_id + "/";
        const response = await axios.get(ep);
        setFilledTemplateData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTemplateData();
  }, []);

  if (!filledTemplateData) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <div>
        <h1>Assessment Details</h1>
        <p>id: {filledTemplateData.id}</p>
        <p>version: {filledTemplateData.version}</p>
        <p>course_code: {filledTemplateData.course_code}</p>
        <p>status: {filledTemplateData.status}</p>
        <p>assessment_key: {filledTemplateData.assessment_key}</p>

        <h1>Template Details</h1>
        <p>
          academicMisconduct: {filledTemplateData.template.academicMisconduct}
        </p>
        <p>
          academicMisconduct: {filledTemplateData.template.assessingFeedback}
        </p>
        {/* <p>assessmentCriteria: {filledTemplateData.template.assessmentCriteria}</p>
        <p>assessmentDetails: {filledTemplateData.template.assessmentDetails}</p> */}
        <p>assessmentTask: {filledTemplateData.template.assessmentTask}</p>
        <p>
          extenuatingCircumstances:{" "}
          {filledTemplateData.template.extenuatingCircumstances}
        </p>
        <p>lateSubmissions: {filledTemplateData.template.lateSubmissions}</p>
        <p>
          learningOutcomes:{" "}
          {filledTemplateData.template.learningOutcomes.knowledge}
        </p>
        <p>marking: {filledTemplateData.template.marking}</p>
      </div>
      <UpdateTemplateStatusButton
        hashed_email={hashed_email}
        template_id={template_id}
        new_status={TemplateStatus.APPROVED}
      />
      <UpdateTemplateStatusButton
        hashed_email={hashed_email}
        template_id={template_id}
        new_status={TemplateStatus.REJECTED}
      />
    </Box>
  );
};

const UpdateTemplateStatusButton: React.FC<UpdateTemplateStatusButtonProp> = ({
  hashed_email,
  template_id,
  new_status,
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
      .catch((error) => {
        console.log("Error Approving Assessment: ", error);
      });
  };

  return <button onClick={handleClick}> {new_status} </button>;
};

export default FilledTemplateComponent;
