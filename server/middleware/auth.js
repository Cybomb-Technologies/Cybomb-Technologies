const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies?.token; // read token from cookie
  if (!token) return res.status(401).json({ msg: "No token, access denied" });

  try {
    const verified = jwt.verify(token, "secretkey");
    req.adminId = verified.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authMiddleware;
