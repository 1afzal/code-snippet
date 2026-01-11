import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import { Client } from "pg";
const pgClient = new Client(process.env.PG_URI)
import bcrypt from "bcrypt";
await pgClient.connect();
const PORT = 6969;
import cors from "cors"
app.use(express.json())
app.use(cors())
pgClient.on("error", ()=>{
    console.log("error")
})

app.post('/user/signup',async(req,res)=>{
    try{
    const { name, email, password } = req.body;
    if(!email|| !name || !password){
        return res.status(400).json({
            error: "Incomplete credentials"
        })
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    const insertQuery = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`
    const response = await pgClient.query(insertQuery,[name, email,hashedPassword])
    return res.status(200).send("Inserted")
}
catch(err){
    return res.status(400).json({
        message: err.message
    })
}
})
app.listen(PORT, ()=>{
    console.log(`Server is live at port ${PORT}`)
})