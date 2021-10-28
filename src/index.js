import { GraphQLServer } from "graphql-yoga";
import {Query} from './resolvers/Query.js'
import {Todo} from './resolvers/Todo.js'
import { User } from './resolvers/User.js'

import {db} from './db/db.js'

const typeDefs = "src/schema/schema.graphql";

// const resolvers = "src/schema/resolvers.gql"
const resolvers = {
  Query,
  User,
  Todo
};

const server = new GraphQLServer({ typeDefs, resolvers, context: {db} });
server.start(() =>
  console.log("Server is running on localhost:4000\n > listening...")
);
