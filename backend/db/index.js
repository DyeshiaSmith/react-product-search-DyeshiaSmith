import { client } from "./client";

export const getAllProducts = async () => {
  try {
    await client.connect();
    const cursor = await client.db("products").collection("data").find();
    console.log(cursor);
    return await cursor.toArray();
  } catch (e) {
    throw new Error(e);
  } finally {
    await client.close();
  }
};
