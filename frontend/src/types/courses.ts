import Assessment from "./assessments";

type Course = {
  title: string;
  code: string;
  credits: number;
  assessments: Assessment[];
};

export default Course;
