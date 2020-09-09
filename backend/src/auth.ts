const jwt = require("jsonwebtoken");
const secret = "secret";

const createToken = ({ id, role }) => jwt.sign({ id, role }, secret);

const getUserFromToken = (token) => {
  try {
    const user = jwt.verify(token, secret);
    // return user from the model
  } catch (e) {
    console.error(e);
    return null;
  }
};
