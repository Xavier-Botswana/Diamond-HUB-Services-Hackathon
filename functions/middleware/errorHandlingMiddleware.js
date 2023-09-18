/**

 * Middleware function to handle errors.
 * @param {Error} error - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function errorHandlingMiddleware(error, req, res, next) {
  console.error(error.stack);
  res.status(500).json({error: error.message});
}

module.exports = errorHandlingMiddleware;
