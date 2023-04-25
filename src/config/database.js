import mongoose from "mongoose";
mongoose.Promise = global.Promise;
export default mongoose.connect(
  "mongodb+srv://genericUser:123mudar@cluster0.ohivhlx.mongodb.net/?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);
