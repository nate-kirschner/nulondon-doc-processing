import LearningOutcome, { LearningOutcomeSections } from "./learningOutcome";

export type AssessmentDetails = {
  courseTitle: string;
  courseCode: string;
  FHEQ: string;
  sitting: string;
  assessmentTitle: string;
  assessmentNumber: string;
  weighting: string;
  courseLeader: string;
  assessmentType: string;
  restrictions: string;
  groupType: GroupType;
  issueDate: string;
  handInDate: string;
  feedbackDeadline: string;
  modeOfSubmission: ModeOfSubmission;
  anonymousMarketing: boolean;
};

export type ModeOfSubmission = 'Online' | 'InPerson'

export type GroupType = 'Individual' | 'Group';

export type GradeRange = {
  min: number;
  max: number;
  description: string;
};

export type AssessmentCriteria = {
  gradeRanges: GradeRange[];
};

export type LearningOutcomes = {
  knowledge: string[];
  subject: string[];
  transferable: string[];
}

export type Template = {
  assessmentDetails: AssessmentDetails;
  assessmentTask: string;
  assessmentCriteria: AssessmentCriteria;
  marking: string;
  learningOutcomes: LearningOutcomeSections;
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
