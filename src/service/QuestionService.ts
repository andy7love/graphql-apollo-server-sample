import { Inject, Service } from "typedi";
import QuestionRepository from "../repository/dal/QuestionRepository";
import { Guid } from "guid-typescript";
import EventBus, { Events } from "../events/EventBus";
import { QuestionInput, AnswerInput } from "../resolvers/Mutation/post";

@Service()
export class QuestionService {
    @Inject('repository.question')
    questionRepository: QuestionRepository;

    @Inject()
    eventBus: EventBus;

    getTags = () => this.questionRepository.getTags();
    getTagQuestions = (tag: string) => this.questionRepository.getTagQuestions(tag);
    getQuestions = () => this.questionRepository.getQuestions()
    getQuestion = (questionId: string) => this.questionRepository.getQuestion(questionId);
    getQuestionAnswers = (questionId: string) => this.questionRepository.getQuestion(questionId).answers;

    createQuestion(questionDTO: QuestionInput) {
        const question = this.questionRepository.createQuestion({
            id: Guid.create().toString(),
            answers: [],
            ...questionDTO
        });
        this.eventBus.emit(Events.CREATE_QUESTION, question);
        return question;
    }

    createAnswer(questionId: string, answerDTO: AnswerInput) {
        const answer = this.questionRepository.createAnswer(questionId, {
            id: Guid.create().toString(),
            ...answerDTO
        });
        this.eventBus.emit(Events.CREATE_ANSWER, this.questionRepository.getQuestion(questionId));
        return answer;
    }

    deleteQuestion = (questionId: string) => this.questionRepository.deleteQuestion(questionId);
}
