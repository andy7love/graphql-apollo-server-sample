import { PubSub as YogaPubSub } from 'graphql-yoga';
import { Service } from 'typedi';

export enum Topics {
    CREATE_QUESTION = 'create_question',
    CREATE_ANSWER = 'create_answer'
};

@Service()
class PubSub extends YogaPubSub { }

export default PubSub;
