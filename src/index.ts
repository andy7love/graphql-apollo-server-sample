import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers'
import { Container } from "typedi";
import { QuestionRepositoryMockData } from "./repository/mockData";
import PubSub from "./events/PubSub";
import initializeEventHandlers from "./events/handlers";

// Setup repository to be used with dependency injection.
Container.set('repository.question', new QuestionRepositoryMockData());

// Get yoga PubSub unique instance.
const pubSub = Container.get(PubSub);

// Wire EventBus with other event dispatchers and handlers.
initializeEventHandlers();

// Initialize GraphQL-Yoga (Apollo) server.
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { pubSub }
});

server.start(() => console.log(`Server is running on http://localhost:4000`))
