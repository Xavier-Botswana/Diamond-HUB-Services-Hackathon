function errorHandlingMiddleware(error, req, res, next) {
  console.error(error.stack);
  res.status(500).json({ error: error.message });
}

module.exports = errorHandlingMiddleware;
