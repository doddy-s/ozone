const jwt = require("jsonwebtoken");

//verify token from cookies
const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  console.log("Cookies: ", req.cookies);

  //Kalo tokennya ga ada
  if (!token) {
    const error = new Error("Token not found");
    error.code = 401;
    error.status = "Unauthorized";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  }

  //Kalo tokennya ada
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("userId: ", decoded.payload.userId);
    req.body.userId = decoded.payload.userId;
    console.log(decoded)
    next();
  } catch (error) {
    //Kalo tokennya ga valid
    error.code = 401;
    error.status = "Unauthorized";

    const response = {
      code: error.code,
      status: error.status,
      message: error.message,
    };

    return res.status(response.code).json(response);
  }
};

module.exports = { verifyToken };
