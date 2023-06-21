var jwt = require("jsonwebtoken");
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;

function userIsLoggedIn(req, res, next) {
  // Get token from the "authorization" header with format "Bearer <token>"
  let authHeader = req.headers["authorization"];
  
  try {
   // Separate 'Bearer'(aka str) and token to keep only the token
    let [str, token] = authHeader.split(" ");
  
    // Throws error on invalid/missing token
    // remember, payload includes the user_id we added to it when we created the token
    let payload = jwt.verify(token, supersecret);

    //get from the payload the users_id and store in the req so we can use later
    req.user_id = payload.usersId;
    //next works as a continuation we have in our routes 
    next();
  } catch (err) {
    res.status(401).send({ error: "Unauthorized" });
  }
}

module.exports = userIsLoggedIn;
