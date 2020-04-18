import 'regenerator-runtime';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";

const app = express();

// setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(cors());
app.set('port', process.env.PORT || 3050);

// GraphQL Configuration
const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers
});
graphqlServer.applyMiddleware({ app });

app.listen(app.get('port'), () => {
  console.log('Listening on port: ' + app.get('port'));
  console.log(`GraphQL server ready at http://localhost:${app.get('port')}${graphqlServer.graphqlPath}`);
});

