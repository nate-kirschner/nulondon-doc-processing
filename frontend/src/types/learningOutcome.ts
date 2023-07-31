export type LearningOutcome = {
    code: string;
    text_desc: string;
}

export type LearningOutcomeSections = {
    knowledge: LearningOutcome[];
    subject: LearningOutcome[];
    transferable: LearningOutcome[];
}

export default LearningOutcome;
