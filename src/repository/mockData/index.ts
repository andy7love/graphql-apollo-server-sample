import { Service } from "typedi";
import QuestionRepository, { Question, Answer, TagFilter } from "../dal/QuestionRepository";
import * as _ from 'lodash';
import data from './mockData';

@Service("repository.question.mockData")
export class QuestionRepositoryMockData implements QuestionRepository {
    getQuestions = () => data;
    getQuestion = (questionId: string) => data.find(q => q.id === questionId);
    createQuestion = (questionDTO: Question) => {
        data.push(questionDTO)
        return questionDTO;
    };
    updateQuestion = (questionId: string, questionDTO: Partial<Question>) => {
        const questionIndex = data.findIndex(q => q.id === questionId);
        if (questionIndex === -1) {
            throw new Error(`question id '${questionIndex}' was not found while updating.`);
        }
        data[questionIndex] = {
            ...data[questionIndex],
            ...questionDTO
        };
        return data[questionIndex];
    };
    deleteQuestion = (questionId: string) => {
        const questionIndex = data.findIndex(q => q.id === questionId);
        if (questionIndex !== -1) {
            data.splice(questionIndex, 1);
            return true;
        } else {
            return false;
        }
    };
    createAnswer = (questionId: string, answerDTO: Answer) => {
        const questionIndex = data.findIndex(q => q.id === questionId);
        if (questionIndex === -1) {
            throw new Error(`question id '${questionIndex}' was not found while creating an answer.`);
        }
        const question = data[questionIndex];
        data[questionIndex] = {
            ...question,
            answers: [
                ...question.answers,
                answerDTO
            ]
        };
        return answerDTO;
    };
    getTags = () => {
        const tags = _
            .chain(data)
            .castArray()
            .flatMap(question => question.tags)
            .groupBy()
            .mapValues((value, key): TagFilter => (
                {
                    tag: key,
                    questionsCount: value.length
                }
            ))
            .toArray()
            .value();
        return tags;
    }
    getTagQuestions = (tag: string) => {
        const questions = data.filter(q => q.tags.includes(tag));
        return questions;
    }
}
