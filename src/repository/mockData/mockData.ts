import { Guid } from "guid-typescript";
import { Question } from "../dal/QuestionRepository";

const data: Array<Question> = [
    {
        author: 'John Lennon',
        id: Guid.create().toString(),
        message: 'This is a sample question?',
        tags: ['react', 'redux', 'css'],
        answers: [
            {
                id: Guid.create().toString(),
                message: 'Sample answer',
                author: 'Luke Skywalker'
            },
            {
                id: Guid.create().toString(),
                message: 'Thanks for the anser Luke!',
                author: 'John Lennon'
            }
        ]
    },
    {
        author: 'Jorge Lucas',
        id: Guid.create().toString(),
        message: 'This is another sample question?',
        tags: ['react', 'relay', 'graphql', 'websockets'],
        answers: [
            {
                id: Guid.create().toString(),
                message: 'This should be a good answer for a good question',
                author: 'Anakin Skywalker'
            }
        ]
    },
    {
        author: 'Jorge Lucas',
        id: Guid.create().toString(),
        message: 'This is specific sample question?',
        tags: ['css'],
        answers: [
            {
                id: Guid.create().toString(),
                message: 'This should be a specific answer for that question',
                author: 'Frodo'
            }
        ]
    }
];

export default data;
