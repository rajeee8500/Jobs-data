import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoURL =
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/SKILL_SAFARI_JOB_PORTAL";

  mongoose
    .connect(mongoURL, {
      dbName: "SKILL_SAFARI_JOB_PORTAL",
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
