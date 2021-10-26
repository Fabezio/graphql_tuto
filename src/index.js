import { GraphQLServer } from "graphql-yoga";
import {Query} from './resolvers/Query.js'
import {Todo} from './resolvers/Todo.js'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = "src/schema/schema.graphql";

// const resolvers = "src/schema/resolvers.gql"
const resolvers = {
  Query,
  Todo
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() =>
  console.log("Server is running on localhost:4000\n > listening...")
);
