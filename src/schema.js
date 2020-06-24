import graphqlTools from 'graphql-tools'

const { makeExecutableSchema } = graphqlTools
import { resolvers } from './resolvers.js';


const typeDefs = `
 type Product {
    _id: ID
    name: String!
    qty: Int
 }
 type Query{
   allProducts: [Product]
 }
 input ProductInput{
   name: String!
   qty: Int
 }
 type Mutation{
   createProduct(input: ProductInput): Product
 }
`
export default makeExecutableSchema({
    typeDefs,
    resolvers
})
