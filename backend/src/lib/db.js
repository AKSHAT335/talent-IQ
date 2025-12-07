import mongoose from "mongoose";

import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        if(!ENV.DB_URL) {
            throw new Error("DB_URL is not defined in environment variables");
        }
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
