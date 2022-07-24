import express from "express";
import mongoose from "mongoose";
import route from "./route/route.js"
import pkg from "dotenv";

pkg.config();
const app = express();

app.use(express.json());
app.use(route)

const PORT = 4000;
const Url = `mongodb+srv://DeepakGunpal:${process.env.DBPass}@deepakcluster0.hynna.mongodb.net/Quora`;

mongoose.connect(Url, {
    useNewUrlParser: true
})
    .then(() => app.listen(process.env.PORT || PORT, console.log(`Live on ${process.env.PORT || PORT}`)))
    .catch((error) => console.log(error.message));
