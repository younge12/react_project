import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.js";

const app = express();

app.use(express.json());
app.use(cors("http://localhost:3000"));

app.use("/auth", authRouter);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/test.html");
// });

export default app;
