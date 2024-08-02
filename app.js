import express from "express";
import cors from "cors";
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import stenoTestRoutes from "./routes/stenotest.js";
import test from "./routes/test.js";
import cookieParser from "cookie-parser";
import path from "path"

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const app = express();

app.use(
  cors({
    origin: ["https://rajasthan-cwa6g4f5ddf8d2dn.centralindia-01.azurewebsites.net", "http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());


const staticPath = path.join(__dirname, "./Frontend/dist");

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/stenoTests", stenoTestRoutes);
app.use("/api/v1/typingTests", test);

app.use(express.static(staticPath));

export { app };
