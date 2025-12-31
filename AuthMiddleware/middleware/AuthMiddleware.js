const JWT_SECRET = "secret123";
import jwt from "jsonwebtoken";
function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(404).json({
            message: "Token missing"
        });
    };
    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next()
    }
    catch(err){
        res.status(403).json({ message: "Invalid or expired token" });
    }
}
export { authMiddleware };

app.get('/login',authMiddleware,(req,res)=>{
    res.json({
        message: "Protected data",
        userId: req.user.userId,
      });
})