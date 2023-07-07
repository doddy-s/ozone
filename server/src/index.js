const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const unprotectedRoute = require("./routes/unprotected.route");
const protectedRoute = require("./routes/protected.route");
const { testDatabaseConnection } = require("./utils/testDbConnection");
const { verifyToken } = require("./middlewares/verifyToken");

const app = express();

//CORS policy for localhost:5173 (React app) to access this server (Express app)
app.use(cors({ origin: ['http://localhost:5173', 'http://azu.doddy.live:5173'], credentials: true }))

//Parsing body to JSON
app.use(express.json());

//Parsing cookies
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
})

//Testing routes
app.get("/test", (req, res) => {
  console.log(req.body)
  res.send("Test route");
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
app.listen(process.env.EXPRESS_PORT, () => {
  console.log("Ozone server listening on port: ", process.env.EXPRESS_PORT);
});

//Test database connection
testDatabaseConnection();
