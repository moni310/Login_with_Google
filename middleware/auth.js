const jwt = require('jsonwebtoken');

const Auth = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      res.json({ message: "Authentication failed", status: false });
    } else {
      const decode = jwt.verify(token, config.JWT_TOKEN_KEY, null);
      req.data = decode;
      const user = await User.findOne({ id: req.data.id });
      if (!user) {
        next();
      } else {
        if (user.blocked === true) {
          res.json({ message: "User Blocked", status: false });
        } else {
          next();
        }
      }
    }
  } catch (error) {
    res.json({ message: "Authentication failed", status: false });
  }
};
  

module.exports=Auth