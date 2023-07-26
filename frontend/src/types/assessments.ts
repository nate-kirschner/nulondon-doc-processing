import LearningOutcomes from "./learningOutcomes";


export interface AssessmentPreview {
  title: string;
  code: number;
  id: string;
  activity: string;
  versions: [];
}

export interface Assessment extends AssessmentPreview {
  weight: number;
  FHEQ: string;
  ae: number;
  learning_outcomes: LearningOutcomes[];
}