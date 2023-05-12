function logReqInfo(req, res, next) {
  console.log("Request URL:", req.originalUrl);
  console.log("Request Type:", req.method);
  next();
}

module.exports = logReqInfo;
