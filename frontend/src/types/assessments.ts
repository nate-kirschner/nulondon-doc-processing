export interface AssessmentBase {
  id: string;
  activity: string;
}

export interface AssessmentPreview extends AssessmentBase {
  versions: [];
}

export interface AssessmentNewVersion extends AssessmentBase {
  weight: number;
  ae: string;
  fheq: string;
}

export interface Assessment extends AssessmentPreview, AssessmentNewVersion {
  duration?: string;
  length?: string;
}