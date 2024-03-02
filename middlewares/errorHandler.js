// Not Found
const notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.orginalUrl}`);
  res.status(404);
  next(error);
};

// Error Handler
const errorHandler = (err, req, res, next) => {
  const statuscode = res.statuscode == 200 ? 500 : res.statuscode;
  res.status(statuscode);
  res.json({
    status: "fail",
    messsage: err?.messsage,
    stack: err?.stack,
  });
};

module.exports = { errorHandler, notFound };
