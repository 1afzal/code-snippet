import express from "express";
const app = express();
import bcrypt from "bcrypt";

app.post('signin',async(req,res)=>{
    const { email, password } = req.body;
    if(!email || !password){
        return res.send("Invalid credentials");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const user = UserModel.create({
        email: email,
        password: hashedPassword
    })
    return res.status(200).json({
        message: "User created ",
        user: user
    })
})