import express from "express";
import { upload } from "./middleware/multer.js";
const app = express()

app.post("/upload",upload.single("file"), (req,res)=>{
    res.status(200).json({
        message: "upload succesfull"
    });
});

app.listen(6969, ()=>{
    console.log('server live at port 6969');
});