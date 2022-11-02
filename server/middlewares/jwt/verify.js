const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    let data = jwt.verify(req.params.token, process.env.SECRET);
    req.body=data.data;
    next();
  } catch (error) {
    res.send({ "invalid Token": error });
  }
};
module.exports = verifyToken;
