import { Assessment } from "./assessments";

export interface CoursePreview {
  title: string;
  code: string;
  assessments: Assessment[];
}

export interface Course extends CoursePreview {
  credits: number;
}
