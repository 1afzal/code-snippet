import jsonwebtoken from "jsonwebtoken";
const JWT_SECRET = "itsasecret";

function AuthMiddleware(req,res,next){
    const authHeader = req.headers.authorization; //Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...


    if (!authHeader || authHeader.startsWith("Bearer ")) {
        return res.status(400).json({
            error: "Token not found!"
        });
    }
    
    //Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

    const token = authHeader.split(" ")[1];

    //decoding the auth header to authenticate
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
