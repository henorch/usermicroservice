import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./src/userTypeDef.js"
import resolvers from "./src/userresolver.js"
import { config } from "./utils/config.js";
import { DatabaseConnection } from "./utils/dbConnection.js";


DatabaseConnection()
const server = new ApolloServer({
    typeDefs, 
    resolvers,
    introspection: true,
    cors: {
        origin:'*',
        credentials: true
    }
})

const {url} = await startStandaloneServer(server, {
    listen: { port: config.PORT}
})

console.log(`user microservice working on ${url}`);