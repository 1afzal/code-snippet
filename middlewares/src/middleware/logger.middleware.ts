import type { Request, Response, NextFunction } from "express";
function loggerMiddleware(req:Request, res:Response, next:NextFunction){
    const info = (`METHOD: ${req.method}\n URL: ${req.url} \n DATE: ${Date.now()}`);
    res.json(info)
    next();
}
export default loggerMiddleware;