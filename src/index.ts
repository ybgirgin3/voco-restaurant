import app from './app';
import { MongoClient } from 'mongodb';
const dot = require('dotenv').config();

// // connect mongo
// export async function connectToMongoDB() {
//   //   const uri = process.env.MONGO_URI;
//   const client = new MongoClient(dot.parsed.MONGO_URI);
//   try {
//     await client.connect();
//     console.log('connected to db');
//   } catch (e) {
//     console.error(`Error while connecting to mongo: ${e}`);
//   }
// }

// // connect to mongo
// connectToMongoDB();

const port = process.env.PORT || 5001;
app.listen(port, async () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
