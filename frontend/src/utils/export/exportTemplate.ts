import { Document, Packer, Paragraph, TextRun, AlignmentType } from "docx";
import { saveAs } from "file-saver";
import { Template } from "../../types/template";
import axios from "axios";
import { exportAssessmentDetails } from "./exportAssessmentDetails";
import { exportAssessmentCriteria } from "./exportAssessmentCriteria";
import exportLearningOutcomes from "./exportLearningOutcomes";

const createParagraphWithStringBody = (title: string, bodyText: string) => {
  return new Paragraph({
    children: [
      new TextRun({
        text: title,
        break: 2,
        size: 24,
      }),
      new TextRun({
        text: bodyText,
        break: 2,
        size: 16,
      }),
    ],
  });
};

const getTemplate = async (
  courseId: string,
  assessmentId: string,
  version: string
): Promise<Template> => {
  const slicedVersion = version.slice(1);
  const response = await axios.get<{ fields: { template: Template } }[]>(
    `http://127.0.0.1:8000/template/${courseId}/${assessmentId}/${slicedVersion}/`
  );
  return response.data[0].fields.template;
};

export const generateWordDocument = async (
  courseId: string,
  assessmentId: string,
  version: string,
  assessmentName: string
) => {
  const template = await getTemplate(courseId, assessmentId, version);
  const assessmentDetails = exportAssessmentDetails(template.assessmentDetails);
  const assessmentTask = createParagraphWithStringBody(
    "Assessment Task",
    template.assessmentTask
  );
  const assessmentCriteria = exportAssessmentCriteria(
    template.assessmentCriteria
  );
  const marking = createParagraphWithStringBody("Marking", template.marking);
  const learningOutcomes = exportLearningOutcomes(template.learningOutcomes);
  const assessingFeedback = createParagraphWithStringBody(
    "Assessing Feedback",
    template.assessingFeedback
  );
  const lateSubmissions = createParagraphWithStringBody(
    "Late Submissions",
    template.lateSubmissions
  );
  const extenuatingCircumstances = createParagraphWithStringBody(
    "Extenuating Circumstances",
    template.extenuatingCircumstances
  );
  const academicMisconduct = createParagraphWithStringBody(
    "Academic Misconduct",
    template.academicMisconduct
  );

  let doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "Assessment Brief: Coursework 2022-23",
                size: 32,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "Assessment Details",
                break: 1,
                size: 24,
              }),
            ],
          }),
          assessmentDetails,
          assessmentTask,
          new Paragraph({
            children: [
              new TextRun({
                text: "Assessment Criteria",
                break: 1,
                size: 24,
              }),
            ],
          }),
          assessmentCriteria,
          marking,
          new Paragraph({
            children: [
              new TextRun({
                text: "Learning Outcomes",
                break: 1,
                size: 24,
              }),
            ],
          }),
          ...learningOutcomes,
          assessingFeedback,
          lateSubmissions,
          extenuatingCircumstances,
          academicMisconduct,
        ],
      },
    ],
  });

  const mimeType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  const docName = `${courseId}-${assessmentName}-${version}.docx`;
  Packer.toBlob(doc).then((blob) => {
    const docblob = blob.slice(0, blob.size, mimeType);
    console.log("docblob", docblob);
    saveAs(docblob, docName);
  });
};
