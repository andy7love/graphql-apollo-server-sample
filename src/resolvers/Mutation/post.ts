import { Container } from 'typedi';
import { QuestionService } from '../../service/QuestionService';

export type QuestionInput = {
    message: string;
    author: string;
    tags: Array<string>;
}

export type AnswerInput = {
    message: string;
    author: string;
}

export const post = {
    async createQuestion(parent, req: { question: QuestionInput }) {
        const questionService = Container.get(QuestionService);
        return questionService.createQuestion(req.question);
    },

    async createAnswer(parent, req: { questionId: string, answer: AnswerInput }) {
        const questionService = Container.get(QuestionService);
        return questionService.createAnswer(req.questionId, req.answer);
    },

    async deleteQuestion(parent, req: { id: string }) {
        const questionService = Container.get(QuestionService);
        return questionService.deleteQuestion(req.id);
    }
}
