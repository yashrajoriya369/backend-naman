const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const blogRouter = require("./routes/blogRoute");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/blog", blogRouter);

// app.use(notFound);
// app.use(errorHandler);

app.use("/", (req, res) => {
  res.send("Hello from Server Side");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
