import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url"; //to resolve the error: (ReferenceError: __dirname is not defined in ES module scope)
import user from "./routes/userRoute.js";
import connectDatabase from "./database.js";
// import from "cors"

const app = express();
const port = process.env.PORT || 5000;

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to uncaught exception");

  process.exit(1);
});

// Below config only used when using in development mode or npm run dev. But in production mode the platform(here "HEROKU") provide their own config
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "server/config/config.env" });
}

// Middleware using for the https method to function properly
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to database
connectDatabase();

// Routing
app.use("/api/v1", user);

//to resolve the error: (ReferenceError: __dirname is not defined in ES module scope)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// connecting the final build html file with database
app.use(express.static(path.join(__dirname, "../client/build"))); //getting the static file (index.html) from build folder in client

// accessing the frontend by only running the backend server
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

// starting the server
const server = app.listen(port, () => {
  console.log(`server is working on http://localhost:${port}`);
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
