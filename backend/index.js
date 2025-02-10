import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
dotenv.config({});

connectDB();

const app = express();
  // set path 
const _dirname = path.resolve();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  cors({
    origin: "https://jobportal-8myv.onrender.com",
    credentials: true,
  })
);

//Api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
