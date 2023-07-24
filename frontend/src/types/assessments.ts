export interface AssessmentPreview {
  id: string;
  activity: string;
}

export interface Assessment extends AssessmentPreview {
  weighting: number;
  duration?: string;
  length?: string;
  versions: number[];
}
