

const app = require("express")();
const { ApolloServer, gql } = require("apollo-server-express");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const fs = require("fs");

const typeDefs = gql(fs.readFileSync('./schema.graphql', {encoding: 'utf8'}));
const resolvers = require('./resolvers');

let apolloServer = null;

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ ApolloServerPluginLandingPageGraphQLPlayground ]
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql'});
}

startServer();


app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});