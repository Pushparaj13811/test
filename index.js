import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
        console.log("Server started at port ", port);
    })
}).catch((error) => {
    console.log("Error : ", error.message);
})

import bookRouter from "./src/routes/book.routes.js";

app.use("/api", bookRouter)
