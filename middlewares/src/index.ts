import express from "express";
const app = express();
import logger from "./middleware/logger.middleware.js";
const PORT=6969;

app.get("/greetings",logger, (req,res)=>{
    return res.status(400).json({
        message: "Hello there...."
    })
})

app.listen(PORT,()=>{
    console.log("Server is live at port" + PORT)
})