const { verifyToken } = require("../services/auth");

exports.validateUser = async (req, res, next) => {
  const headers = req.headers;
  const authorization = headers.authorization;
  if (!authorization) {
    return res.status(403).send({ message: "Forbidden access, login first" });
  }
  //validate the token itself
  const val = await verifyToken(authorization.split(" ")[1]);
  if (!val || !val.success) {
    return res.status(403).send({ message: "Access expired, login first" });
  }
  req.userID = val.userID;
  req.user = val;
  next();
};
