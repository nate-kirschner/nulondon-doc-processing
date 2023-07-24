type Assessment = {
  title: string;
  course: string;
  FHEQ: string;
  assessment_number: number;
  time_restrictions: string;
  weighting: number;
  versions: number[];
  learning_outcomes: [];
};

export default Assessment;
