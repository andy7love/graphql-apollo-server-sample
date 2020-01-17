import { Container } from 'typedi';
import { QuestionService } from '../service/QuestionService';

export const TagFilter = {
    questions: ({ tag }) => {
        const questionService = Container.get(QuestionService);
        return questionService.getTagQuestions(tag);
    }
}
