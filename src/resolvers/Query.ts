import { Container } from 'typedi';
import { QuestionService } from '../service/QuestionService';

export const Query = {
    questions() {
        const questionService = Container.get(QuestionService);
        return questionService.getQuestions();
    },

    question(parent, { id }) {
        const questionService = Container.get(QuestionService);
        return questionService.getQuestion(id);
    }
};
