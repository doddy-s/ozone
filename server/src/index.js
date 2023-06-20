const express = require("express");
const app = express();
const port = 3000;
const unprotectedRoute = require("./routes/unprotected.route");
const protectedRoute = require("./routes/protected.route");
const { testDatabaseConnection } = require("./utils/testDbConnection");
const { verifyToken } = require("./middlewares/verifyToken");

//Parsing body to JSON
app.use(express.json());

//Routes for unprotected routes
app.use("/", unprotectedRoute);

//Token verification
app.use(verifyToken());

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
