import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://Grupo23:Grupo222022@cluster0.jvdb6.mongodb.net/nocountry?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`Mongo Db conectado: ${url}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
