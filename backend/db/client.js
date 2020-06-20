import dotenv from "dotenv";
import mongodb from "mongodb";

dotenv.config();

const { MongoClient } = mongodb;

export const client = MongoClient.connect(process.env.ATLAS_URI, {
  useUnifiedTopology: true,
});

console.log("hello", client);
