const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const port = 3000;
const unprotectedRoute = require("./routes/unprotected.route");
const protectedRoute = require("./routes/protected.route");
const { testDatabaseConnection } = require("./utils/testDbConnection");
const { verifyToken } = require("./middlewares/verifyToken");

//Parsing body to JSON
app.use(express.json());

//Parsing cookies
app.use(cookieParser());

//Testing routes
app.get("/test", (req, res) => {
  res.cookie("token", "abcd", {
    maxAge: 360000,
  });
  console.log("Cookies: ", req.cookies);
  res.send(req.cookies);
});

//Routes for unprotected routes
app.use("/", unprotectedRoute);

//Token verification
app.use(verifyToken);

//Routes for protected routes after token verification
app.use("/", protectedRoute);

//hello world
app.get("/", (req, res) => {
  res.send("Hello World! Hello Eperibodi");
});

//Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Test database connection
testDatabaseConnection();
