import "express-async-errors";
//express-async-errors handle the catch in try catch in controller and send it to app.use((err, req, res, next) below
import { StatusCodes } from "http-status-codes"; //A library for HTTP status codes
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
//routers
import roomsRouter from "./routers/roomsRouter.js";
import bookingRouter from "./routers/bookingsRouter.js";
import stripeController from "./routers/stripRouter.js";
//step 1 to read public folder
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
// import cors from "cors";
// middleware

//step 2:  because we are using es6 we dont have access to __dirname so we do it like this
const __dirname = dirname(fileURLToPath(import.meta.url));
//app.use(express.static(path.resolve(__dirname, "./public")));
//morgan
if (process.env.NODE_ENV === "development") {
  // just console our req url like POST / 200 67.568 ms - 40
  app.use(morgan("dev"));
}
app.use(cookieParser()); // read the req.cookies
//security
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://js.stripe.com"],
      scriptSrcElem: ["'self'", "https://js.stripe.com"], // just to be safe
      connectSrc: [
        "'self'",
        "https://api.bigdatacloud.net",
        "https://js.stripe.com",
      ],
      imgSrc: [
        "'self'",
        "data:",
        "https://*.tile.openstreetmap.org", // ✅ fix this line
        "https://unpkg.com",
      ],
      frameSrc: ["'self'", "https://js.stripe.com"], // Stripe uses iframes
    },
  })
);

// app.use(express.json()); // let us use read date from body into the req  Object (req.body) ( parse data from body), then will replaced by app.use(express.json({ limit: "10kb" })) with limiter
//limiter is middleware fun , allow 100 request per 1 minute
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 1000,
  handler: (req, res) => {
    res.status(429).json({
      status: 429,
      error: "You have exceeded the rate limit. Please try again later.",
    });
  },
});
app.use("/api", limiter);

app.use(express.json({ limit: "20mb" })); // let us use read date from body into the req  Object (req.body) ( parse data from body)
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
//express.urlencoded() is middleware that parses incoming requests with application/x-www-form-urlencoded payloads, which are typically sent from HTML forms.
app.use(mongoSanitize()); //it remove all the $
//Data sanitization against xxs(cross site),Data sanitization against NoSQL query injection, mean attack with just knowing password and write "email":{"$gt":""},

//routes
app.use(express.static(path.join(__dirname, "client", "dist")));

app.use("/api/v1/rooms", roomsRouter);
app.use("/api/v1/bookings", bookingRouter);
app.use("/api/v1/stripe", stripeController);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});
app.use("*", (req, res) => {
  //catch error for unknown routes
  res.status(404).json({ msg: "No route was found." });
});
app.use((err, req, res, next) => {
  //catch error coming from our controller send by express-async-errors , its check if the error created by functions inside customErrors.js or provide custom message
  //console.log(err); // the error we created have message and statuscode
  const statusCode = err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR; //mean 500
  const msg = err.message || "something went wrong, try again later";
  res.status(statusCode).json({ msg });
});
// Server and Database Connection

const port = process.env.PORT || 5100;
const startServer = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to MongoDB...");
    const server = app.listen(port, () => {
      console.log(`Server running on port ${port}...`);
    });

    // Graceful Shutdown Handler
    process.on("SIGINT", async () => {
      console.log("Shutting down gracefully...");
      server.close(() => {
        console.log("HTTP server closed.");
      });
      await mongoose.connection.close();
      console.log("MongoDB connection closed.");
      process.exit(0);
    });
  } catch (error) {
    console.log("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

startServer();
// After Initialization: The SIGTERM handler needs access to resources like mongoose.connection and the HTTP server (server), so it must come after they are initialized.
// Modularity: Wrapping the server startup logic in an async function (startServer) makes it easier to manage and maintain, especially when adding a graceful shutdown mechanism.
// Clarity: Keeping the shutdown logic close to where the app is started makes the flow of the code more intuitive.
// By adding this at the end of your server.js, your application will handle termination signals properly, ensuring a smooth shutdown process.
