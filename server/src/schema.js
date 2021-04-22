const { gql } = require("apollo-server");

const typeDefs = gql`
    "A track is a group of modules that teach about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }
    "Author is a complete Track or a Module"
    type Author {
        id: ID!
        name: String!
        photo: String
    }

    type Query {
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }
`;

module.exports = typeDefs;
