import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoDBInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
        );
        console.log(`MongoDB connected: ${mongoDBInstance.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
