import LearningOutcome, {
  LearningOutcomeSections,
} from "../../types/learningOutcome";
import {
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  BorderStyle,
  WidthType,
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

const exportLearningOutcomes = (learningOutcomes: LearningOutcomeSections) => {
  return [
    ...createLearningOutcomesSection(
      "Knowledge and Understanding",
      learningOutcomes.knowledge
    ),
    ...createLearningOutcomesSection(
      "Subject-Specific Skills",
      learningOutcomes.subject
    ),
    ...createLearningOutcomesSection(
      "Transferable Skills",
      learningOutcomes.transferable
    ),
  ];
};

const createLearningOutcomesSection = (
  title: string,
  outcomes: LearningOutcome[]
) => {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: title,
          break: 1,
          size: 22,
        }),
      ],
    }),
    new Table({
      rows: outcomes.map((outcome) => createLearningOutcome(outcome)),
    }),
  ];
};

const createLearningOutcome = (outcome: LearningOutcome) => {
  return new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            text: outcome.code,
          }),
        ],
        borders: noBorder,
        width: { size: 10, type: WidthType.PERCENTAGE },
      }),
      new TableCell({
        children: [
          new Paragraph({
            text: outcome.text_desc,
          }),
        ],
        borders: noBorder,
        width: { size: 20, type: WidthType.PERCENTAGE },
      }),
    ],
  });
};

export default exportLearningOutcomes;
