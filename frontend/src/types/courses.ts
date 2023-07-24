import { AssessmentPreview } from "./assessments";

export interface CoursePreview {
  title: string;
  code: string;
  assessments: AssessmentPreview[];
}

export interface Course extends CoursePreview {
  credits: number;
}
