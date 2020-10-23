import mongoose, { ConnectionOptions } from "mongoose";

(async () => {
  try {
    const mongooseOptions: ConnectionOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      authSource: "admin",
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD,
    };
    const db = await mongoose.connect(
      `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`,
      mongooseOptions
    );
    console.log("> Database is connected to: ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
