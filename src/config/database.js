import mongoose from "mongoose";
import * as dotenv from "dotenv";

mongoose.Promise = global.Promise;
dotenv.config();

const linkDb = process.env.DB;

export default mongoose.connect(linkDb, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
