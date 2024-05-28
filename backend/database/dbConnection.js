import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoURL = process.env.MONGODB_URI || "mongodb://localhost:27017/MERN_JOB_SEEKING_WEBAPP";

  mongoose
    .connect(mongoURL, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
