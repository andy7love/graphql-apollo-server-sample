import { EventEmitter } from 'events';
import { Service } from "typedi";

export enum Events {
    CREATE_QUESTION = 'create_question',
    CREATE_ANSWER = 'create_answer'
};

@Service()
class EventBus extends EventEmitter { }

export default EventBus;
