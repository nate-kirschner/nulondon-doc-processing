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

const createRangeText = (min: number, max: number) => {
  if (max === 100) {
    return `${min} or higher`;
  } else if (min === 0) {
    return `${max} or less`;
  } else {
    return `${min}-${max}`;
  }
};

const createGradeRange = (range: GradeRange) => {
  return new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            text: createRangeText(range.min, range.max),
          }),
        ],
        borders: noBorder,
        width: { size: 10, type: WidthType.PERCENTAGE },
      }),
      new TableCell({
        children: [
          new Paragraph({
            text: range.description,
          }),
        ],
        borders: noBorder,
        width: { size: 20, type: WidthType.PERCENTAGE },
      }),
    ],
  });
};

export const exportAssessmentCriteria = (criteria: AssessmentCriteria) => {
  return new Table({
    rows: criteria.gradeRanges.map((range) => createGradeRange(range)),
  });
};
