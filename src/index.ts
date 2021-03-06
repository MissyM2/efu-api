import { createServer } from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import resolvers from './resolvers';

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);
  const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    introspection: true,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: '/api',
  });

  httpServer.listen({ port: process.env.PORT || 4000 }, () =>
    console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`)
  );
};

startServer();
