const jwt = require("jsonwebtoken");

export const authenticate = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    return decoded;
  } catch (err) {
    console.log("invalid token");
    return null;
  }
};