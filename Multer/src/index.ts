import express from "express";
import { upload } from "./middleware/multer.js";
const app = express()

app.post("/upload/file",upload.single("file"), (req,res)=>{
    res.status(200).json({
        message: "upload succesfull"
    });
});

app.post("/upload/photos",upload.array("photos", 12), (req,res)=>{
    console.log("photos uploaded succesfully");
});

app.listen(6969, ()=>{
    console.log('server live at port 6969');
});