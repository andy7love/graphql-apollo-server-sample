import Container from "typedi";
import PubSub, { Topics } from "../PubSub";
import EventBus, { Events } from "../EventBus";

const initializeEventHandlers = () => {
    const pubSub = Container.get(PubSub);
    const eventBus = Container.get(EventBus);

    eventBus.on(Events.CREATE_QUESTION, event => {
        pubSub.publish(Topics.CREATE_QUESTION, event);
    });

    eventBus.on(Events.CREATE_ANSWER, event => {
        pubSub.publish(Topics.CREATE_ANSWER, event);
    });
}

export default initializeEventHandlers;
