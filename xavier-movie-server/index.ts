import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";

const port = 80;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("public/")));

app.get("/", (req, res) => {
    res.status(200).send("WOW");
});

app.listen(port, () => {
    console.log("Portfolio is listening on port: " + port);
});
