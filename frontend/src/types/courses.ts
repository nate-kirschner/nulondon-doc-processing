import { AssessmentPreview } from "./assessments";
import LearningOutcome from "./learningOutcome";

export interface CourseBase {
  title: string;
  code: string;
}

export interface CourseNewVersion extends CourseBase{
  learning_outcomes: LearningOutcome[];
}

export interface CoursePreview extends CourseBase {
  assessments: AssessmentPreview[];
}

export interface Course extends CoursePreview {
  credits: number;
}