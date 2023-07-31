export interface AssessmentBase {
  id: string;
  activity: string;
}

export type Version = {
  version: number;
  status: "PENDING" | "APPROVED" | "REJECTED";
};

export interface AssessmentPreview extends AssessmentBase {
  versions: Version[];
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
