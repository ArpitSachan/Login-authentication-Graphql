import Product from './models/Product.js';
export const resolvers = {
    Query: {
        allProducts(){
          return [{_id: 'assad', name: 'Graphql', qty: 1}];
        }
    },
    Mutation:{
      async createProduct(_, {input}){
        return await Product.create(input);
      }
    }
}
