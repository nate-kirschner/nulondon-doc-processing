export type AssessmentDetails = {
  courseTitle: string;
  courseCode: string;
  FHEQ: string;
  sitting: string;
  assessmentTitle: string;
  version: number;
  assessmentNumber: string;
  weighting: string;
  courseLeader: string;
  assessmentType: string;
  restrictions: string;
  issueDate: string;
  handInDate: string;
  feedbackDeadline: string;
  modeOfSubmission: string;
  anonymousMarketing: boolean;
};

type GradeRange = {
  min: number;
  max: number;
  description: string;
};

type AssessmentCriteria = {
  gradeRanges: GradeRange[];
};

export type Template = {
  assessmentDetails: AssessmentDetails;
  assessmentTask: string;
  assessmentCriteria: AssessmentCriteria;
  marking: string;
  learningOutcomes: string[];
  assessingFeedback: string;
  lateSubmissions: string;
  extenuatingCircumstances: string;
  academicMisconduct: string;
};

export type FilledTemplate = {
  id: number;
  version: number;
  assessment_key: number;
  course_code: string;
  status: TemplateStatus;
  template: Template;
};

export enum TemplateStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}
