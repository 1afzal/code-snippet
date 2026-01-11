import type { Request, Response, NextFunction } from "express";
interface Role{
    role:string
}
function RoleBasedAccess(role:Role){
    return(req:Request, res:Response, next:NextFunction) =>{
        //@ts-expect-error
        if(req.user?.role !== role ){
            return res.status(400).json({
                message: "Unauthorized"
            });
        };
        next();
    };
}
export default RoleBasedAccess;