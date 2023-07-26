import { AssessmentPreview } from "./assessments";
import LearningOutcomes from "./learningOutcomes";

export interface CourseBase {
  title: string;
  code: string;
}

export interface CourseNewVersion extends CourseBase{
  learning_outcomes: LearningOutcomes[];
}

export interface CoursePreview extends CourseBase {
  assessments: AssessmentPreview[];
}

export interface Course extends CoursePreview {
  credits: number;
}