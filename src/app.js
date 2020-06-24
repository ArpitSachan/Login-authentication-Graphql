import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema.js';

mongoose.promise=global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/ggl_db')
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    return res.send('Hello GraphQL Here!!')
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context:{
      user: '1'
    }
}));

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})
