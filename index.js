const express = require('express');
const cors = require('cors')
const graphqlHTTP = require('express-graphql');

const app = express();
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static("public"));
app.use('/graphql', graphqlHTTP({
    schema,
    pretty: true,
    graphiql: true,
}))

app.listen(port, '0.0.0.0', (err) => {
    console.log(`server started on port ${port}`)
})
