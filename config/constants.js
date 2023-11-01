import dotenv from "dotenv";

dotenv.config();

export const DATABSE_CONNECTION = process.env.MONGODB_CONNECTION | null;
