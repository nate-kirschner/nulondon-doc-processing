export interface AssessmentPreview {
  id: string;
  activity: string;
  versions: [];
}

export interface Assessment extends AssessmentPreview {
  weighting: number;
  duration?: string;
  length?: string;
}
