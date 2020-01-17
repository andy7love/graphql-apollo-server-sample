export interface Answer {
    id: string;
    author: string;
    message: string;
}

export interface Question {
    id: string;
    author: string;
    message: string;
    answers: Array<Answer>;
    tags: Array<string>;
}

interface QuestionRepository {
    getQuestions: () => Array<Question>;
    getQuestion: (questionId: string) => Question;
    createQuestion: (questionDTO: Question) => Question;
    updateQuestion: (questionId: string, questionDTO: Partial<Question>) => Question;
    deleteQuestion: (questionId: string) => boolean;
    createAnswer: (questionId: string, answerDTO: Answer) => Answer;
}

export default QuestionRepository;
