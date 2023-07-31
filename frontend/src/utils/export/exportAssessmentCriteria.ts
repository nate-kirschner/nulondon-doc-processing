import { AssessmentCriteria, GradeRange } from "../../types/template";
import {
  Paragraph,
  TextRun,
  AlignmentType,
  WidthType,
  Table,
  TableRow,
  TableCell,
  BorderStyle,
} from "docx";

const createGradeRange = (range: GradeRange) => {};

export const exportAssessmentCriteria = (criteria: AssessmentCriteria) => {
  const noBorder = {
    left: {
      style: BorderStyle.NIL,
    },
    right: {
      style: BorderStyle.NIL,
    },
    top: {
      style: BorderStyle.NIL,
    },
    bottom: {
      style: BorderStyle.NIL,
    },
  };

  return new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                text: "70 or higher",
              }),
            ],
            borders: noBorder,
            width: { size: 10, type: WidthType.PERCENTAGE },
          }),
          new TableCell({
            children: [
              new Paragraph({
                text: "There was evidence of the ability to perform all programming tasks correctly. The demonstration of the methods was excellent, coherent, well documented and clearly explained.",
              }),
            ],
            borders: noBorder,
            width: { size: 20, type: WidthType.PERCENTAGE },
          }),
        ],
      }),
    ],
  });
};
