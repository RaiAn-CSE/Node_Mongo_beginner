const { MongoClient } = require("mongodb");
require('dotenv').config();

// Replace the uri string with your connection string.
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.bxqfvab.mongodb.net/?retryWrites=true&w=majority`;

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
