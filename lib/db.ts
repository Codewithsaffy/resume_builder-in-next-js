import mongoose from "mongoose";

interface ConnectionObj {
  isConnected?: number;
}

const connection: ConnectionObj = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already Connected to dataBase");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "resume_builder",
    });
    // console.log(db);
    connection.isConnected = db.connections[0].readyState;
    console.log("db connect successfully");
  } catch (error) {
    console.log("Failed to connect with db", error);
    process.exit(1);
  }
}

export default dbConnect;
