function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    data: null,
  });
}

module.exports = errorHandler;
