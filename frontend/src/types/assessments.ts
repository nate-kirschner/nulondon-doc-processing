import LearningOutcomes from "./learningOutcomes";


export interface AssessmentPreview {
  id: string;
  activity: string; // assessment title
  versions: [];
}

export interface Assessment extends AssessmentPreview {
  weight: number;
  duration?: string;
  length?: string;
  FHEQ: string;
  ae: number;
  learning_outcomes: LearningOutcomes[];
}
