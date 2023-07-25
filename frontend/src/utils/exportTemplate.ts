import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
} from "docx";
import { saveAs } from "file-saver";
import { AssessmentDetails, Template } from "../types/template";
import axios, { AxiosResponse } from "axios";

const createParagraphWithStringBody = (title: string, bodyText: string) => {
  return new Paragraph({
    children: [
      new TextRun({
        text: title,
        break: 1,
        size: 24,
      }),
      new TextRun({
        text: bodyText,
        break: 1,
        size: 16,
      }),
    ],
  });
};

const createTableRow = (left: string, right: string) => {
  return new TableRow({
    children: [
      new TableCell({
        children: [new Paragraph(left)],
      }),
      new TableCell({
        children: [new Paragraph(right)],
      }),
    ],
  });
};

const createAssessmentDetailsTable = (details: AssessmentDetails) => {
  return new Table({
    rows: [
      createTableRow("Course Title", details.courseTitle),
      createTableRow("Course Code", details.courseCode),
      createTableRow("Course Leader", details.courseLeader),
      createTableRow("Level", details.FHEQ),
      createTableRow("Sitting", details.sitting),
      createTableRow("Assessment Title", details.assessmentTitle),
      createTableRow("Assessment Number", details.assessmentNumber),
      createTableRow("Assessement Type", details.assessmentType),
      createTableRow("Restrictions on Time/Length", details.restrictions),
      createTableRow("Assessment Weighting", details.weighting),
      createTableRow("Issue Date", new Date(details.issueDate).toISOString()),
      createTableRow(
        "Hand In Deadline",
        new Date(details.handInDate).toISOString()
      ),
      createTableRow(
        "Planned Feedback Deadline",
        new Date(details.feedbackDeadline).toISOString()
      ),
      createTableRow("Mode of Submission", details.modeOfSubmission),
      createTableRow(
        "Anonymous Marking",
        details.anonymousMarketing ? "Yes" : "No"
      ),
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
    `http://127.0.0.1:8000/template/${courseId}/${assessmentId}/${slicedVersion}`
  );
  return response.data[0].fields.template;
};

export const generateWordDocument = async (
  courseId: string,
  assessmentId: string,
  version: string
) => {
  const template = await getTemplate(courseId, assessmentId, version);
  const assessmentDetails = new Paragraph({
    children: [
      new TextRun({
        text: "",
        size: 24,
      }),
      createAssessmentDetailsTable(template.assessmentDetails),
    ],
  });
  const assessmentTask = createParagraphWithStringBody(
    "Assessment Task",
    template.assessmentTask
  );
  const assessmentCriteria = {};
  const marking = createParagraphWithStringBody("Marking", template.marking);
  const learningOutcomes = {};
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
          //   assessmentCriteria,
          marking,
          //   learningOutcomes,
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
  Packer.toBlob(doc).then((blob) => {
    const docblob = blob.slice(0, blob.size, mimeType);
    saveAs(docblob, "testDoc.docx");
  });
};
