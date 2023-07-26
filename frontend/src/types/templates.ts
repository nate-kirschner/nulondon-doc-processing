export type AssessmentDetails = {
  courseTitle: string;
  courseCode: string;
  FHEQ: string;
  sitting: string;
  assessmentTitle: string;
  version: number;
  assessmentNumber: string;
  weighting: string;
  courseLeaser: string;
  assessmentType: string;
  restrictions: string;
  issueDate: Date;
  handInDate: Date;
  feedbackDeadline: Date;
  modeOfSubmission: string;
  anonymousMarketing: boolean;
};

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
  learningOutcomes: LearningOutcomes;
  assessingFeedback: string;
  lateSubmissions: string;
  extenuatingCircumstances: string;
  academicMisconduct: string;
};
