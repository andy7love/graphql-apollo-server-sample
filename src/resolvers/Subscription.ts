import { Topics } from '../events/PubSub';

export const Subscription = {
    questionChanged: {
        questionChanged: {
            subscribe: (parent, args, { pubsub }) =>
                pubsub.asyncIterator([Topics.CREATE_QUESTION, Topics.CREATE_ANSWER])
        },
        resolve: payload => {
            return payload
        },
    },
}
