import jsonwebtoken from "jsonwebtoken";
const JWT_SECRET = "itsasecret";

function AuthMiddleware(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader || authHeader.startsWith("Bearer ")){
        return res.status(400).json({
            error: "Token not found!"
        });
    };
    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(200).json({
            error: "invalid token"
        });
    };
}
export { AuthMiddleware };
