import { Service } from "typedi";
import QuestionRepository, { Question, Answer, TagFilter } from "../dal/QuestionRepository";

// not implemented yet...

@Service("repository.questions.mongoDB")
export class QuestionRepositoryMongoDB implements QuestionRepository {
    getTagQuestions: (tag: string) => Question[];
    getQuestions: () => Question[];
    getQuestion: (questionId: string) => Question;
    createQuestion: (questionDTO: Question) => Question;
    updateQuestion: (questionId: string, questionDTO: Partial<Question>) => Question;
    deleteQuestion: (questionId: string) => boolean;
    createAnswer: (questionId: string, answerDTO: Answer) => Answer;
    getTags: () => TagFilter[];
}
