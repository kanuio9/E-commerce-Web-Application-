const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = async (userId) => {
    return jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" }); 
}

const getUserIdFromToken = (token) => {
    const decodeToken = jwt.verify(token, SECRET_KEY);
    return decodeToken.userId;
}

module.exports = { generateToken, getUserIdFromToken };