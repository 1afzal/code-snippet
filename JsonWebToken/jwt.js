
import jwt from "jsonwebtoken";
const JWT_SECRET = "secret123";

function jwtAuth(userId) {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
  console.log("Token:" + token)
}
jwtAuth();