const {db} = require("../firebaseAdmin");

/**
 * Middleware function that logs HTTP requests to a Firestore collection.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
async function loggingMiddleware(req, res, next) {
  const start = Date.now();

  res.on("finish", async () => {
    const duration = Date.now() - start;
    const logEntry = {
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration,
      requestBody: req.body,
      // Add any other details you want to log
    };

    try {
      await db.collection("auditLogs").add(logEntry);
    } catch (error) {
      console.error("Failed to save log entry:", error);
    }
  });

  next();
}

module.exports = loggingMiddleware;
