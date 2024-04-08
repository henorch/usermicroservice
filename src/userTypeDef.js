export const typeDefs = `#graphql

type User {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    username: String!
} 

input createNewInput {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    username: String!

}

input updateNewInput {
    firstname: String
    lastname: String
    email: String
    password: String
    username: String
}

type Token {
    token: String!
}

input logInUSer {
    email: String,
    password: String
}

type Query {
    getAllUser: [User!]!

}

type Mutation {
    createNewUser(input: createNewInput): User!
    loginUser(username: String!, password: String!): User!
    # updateUser(input: updateNewInput): User!
}
`