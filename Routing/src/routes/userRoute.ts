import { Router } from "express";
const userRouter = Router();

userRouter.get("/info", async(req,res)=>{
    const user = {
        name: "John Doe", 
        age: 21, 
        USN: "4SF22IS007"
    };
    console.log(user);
    res.status(200).send({
        message: "user created",
        user: user
    })
})
export { userRouter };