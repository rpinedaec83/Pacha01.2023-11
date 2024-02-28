import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

export const connectDB = async () => {
  try {
    await connect(MONGODB_URI);
    console.log("Conectando a la base de datos de Luis");
  } catch (error) {
    console.error(error);
  }
};
