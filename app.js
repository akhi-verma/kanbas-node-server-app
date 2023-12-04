import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import cors from 'cors';
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import AssignmentRoutes from "./Assignments/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);
import UserRoutes from "./users/routes.js";
import session from "express-session";

const app = express();
app.use(express.json());
app.use(cors(
    {credentials: true,
        origin: "http://localhost:3000",
    }
));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  app.use(
    session(sessionOptions)
  );  
Hello(app);
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
UserRoutes(app);
//app.listen(4000);
app.listen(process.env.PORT || 4000);

