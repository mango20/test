import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cors from "cors";
const app = express();

const port = process.env.PORT || 5001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.json());
app.use(cors());

import userRouter from "./routes/userRoute.js";

app.use("/api", userRouter);

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
