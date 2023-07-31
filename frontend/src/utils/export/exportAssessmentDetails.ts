import { AssessmentDetails } from "../../types/template";
import {
  TableRow,
  TableCell,
  Table,
  Paragraph,
  WidthType,
  TextRun,
  convertInchesToTwip,
} from "docx";

const createTableRow = (left: string, right: string) => {
  const margins = {
    top: convertInchesToTwip(0.1),
    bottom: convertInchesToTwip(0.1),
    left: convertInchesToTwip(0.05),
    right: convertInchesToTwip(0),
  };
  return new TableRow({
    children: [
      new TableCell({
        width: { size: 10, type: WidthType.PERCENTAGE },
        children: [
          new Paragraph({
            children: [new TextRun({ text: left, bold: true })],
          }),
        ],
        shading: {
          fill: "C8C8C8",
        },
        margins,
      }),
      new TableCell({
        width: { size: 10, type: WidthType.PERCENTAGE },
        children: [new Paragraph(right)],
        margins,
      }),
    ],
  });
};

const creatAssessmentDetailsTable = (details: AssessmentDetails) => {
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

export const exportAssessmentDetails = (
  details: AssessmentDetails
): Paragraph => {
  return new Paragraph({
    children: [
      new TextRun({
        text: "",
        size: 24,
      }),
      creatAssessmentDetailsTable(details),
    ],
  });
};
