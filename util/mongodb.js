import { MongoClient } from "mongodb";

let cached = global._mongo;
if (!cached) {
  cached = global._mongo = { client: null, db: null };
}

export async function getMongoDb() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
  if (!uri || !dbName) {
    throw new Error("Missing MONGODB_URI or MONGODB_DB environment variables");
  }

  if (cached.client && cached.db) {
    return cached.db;
  }

  const client = new MongoClient(uri, {
    maxPoolSize: 10,
    minPoolSize: 0,
    serverSelectionTimeoutMS: 5000
  });
  await client.connect();
  const db = client.db(dbName);
  cached.client = client;
  cached.db = db;
  return db;
}


