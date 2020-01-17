import { Container } from 'typedi';
import { QuestionService } from '../service/QuestionService';

export const Question = {
  answers: ({ id }) => {
    const questionService = Container.get(QuestionService);
    return questionService.getQuestionAnswers(id);
  }
}
