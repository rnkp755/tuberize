import "dotenv/config";
import express from "express";
import connectDB from "./db/db.js";

const app = express();
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
        process.exit(1);
    });

// Routes
import router from "./routes/channelData.route.js";
import blogRouter from "./routes/blog.route.js";

app.use("/api/v1", router);
app.use("/api/v1/blog", blogRouter);
