const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://BackEnd-beginner:HCvXZVJUDfeDQjuo@cluster0.bxqfvab.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
        const listItem = client.db('demo').collection('list');
        // Object:
        const info = { name: "raian", Roll: '184r70', Class: "Ten" };
        // Use async/await to handle the promise returned by insertOne
        const result = await listItem.insertOne(info);

        if (result.acknowledged === true) {
            console.log('Success');
        } else {
            console.log('Failed');
        }

        console.log(result, "result");

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);










// var MongoClient = require('mongodb').MongoClient;
// var uri = "mongodb+srv://BackEnd-beginner:HCvXZVJUDfeDQjuo@cluster0.bxqfvab.mongodb.net/?retryWrites=true&w=majority";

// var config = { useUnifiedTopology: true }

// MongoClient.connect(URL, config, function (error) {
//     if (error) {
//         console.log('Connection Failed');
//     } else {
//         console.log('Connected Successfully');
//     }
// })
// const client = new MongoClient(uri);
// async function run() {
//     try {
//         const database = client.db('demo');
//         const movies = database.collection('list');
//         // Query for a movie that has the title 'Back to the Future'
//         const query = {};
//         const movie = await movies.findOne(query);
//         console.log(movie);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);