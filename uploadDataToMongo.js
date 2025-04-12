import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Rooms from "./models/Rooms.js";
dotenv.config();
try {
  await mongoose.connect(process.env.DATABASE);
  const products = JSON.parse(
    await readFile(new URL("./utils/Rooms.json", import.meta.url))
  );

  await Rooms.deleteMany();
  await Rooms.create(products);
  console.log("we did it !!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}

//in terminal node uploadDataToMongo.js
