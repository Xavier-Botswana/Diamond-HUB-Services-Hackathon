const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const errorHandlingMiddleware = require("./middleware/errorHandlingMiddleware");
const loggingMiddleware = require("./middleware/loggingMiddleware");

const applicationRoutes = require("./routes/applicationRoutes");
const userRoutes = require("./routes/userRoutes");
const diamondRoutes = require("./routes/diamondRoutes");
const licenseRoutes = require("./routes/licenseRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");

const app = express();

// Automatically allow cross-origin requests
app.use(cors({origin: true}));

// Logging middleware (you can use 'tiny' or 'combined' or other formats)
app.use(morgan("tiny"));

// Use the routes
app.use("/application", applicationRoutes);
app.use("/user", userRoutes);
app.use("/diamond", diamondRoutes);
app.use("/license", licenseRoutes);
app.use("/analytics", analyticsRoutes);

// Middleware for error handling
app.use(errorHandlingMiddleware);
app.use(loggingMiddleware);

// Export API to Firebase Cloud Functions
exports.api = functions.https.onRequest(app);
