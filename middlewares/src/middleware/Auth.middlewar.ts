import jwt from "jsonwebtoken";
const JWT_SECRET="super-secret"
import type { Request, Response, NextFunction } from "express";
function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    
    const token = authHeader.split(" ")[1];
    
    try {
        //@ts-expect-error
      const decoded = jwt.verify(token, JWT_SECRET);
      //@ts-expect-error
      req.user = decoded;
      next();
    } catch (err) {
      res.status(403).json({ message: "Invalid token" });
    }
  }
  export default AuthMiddleware;