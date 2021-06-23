const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return await next();
  }
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1]; // "Bearer TOKEN"
    }

    if (!token) {
      return await res.status(403).json({ message: "auth yuqkuuuuu" });
    }

    let decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded;

    res.setHeader("Last-Modified", new Date().toUTCString());
    await next();
  } catch (error) {
    return await res.status(401).json({ message: "auth yuqkuuuuu" });
  }
};
