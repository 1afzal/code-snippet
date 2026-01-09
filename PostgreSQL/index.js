import express from "express";
const app = express();
import { Client } from "pg"
app.use(express.json())
import dotenv from "dotenv";
dotenv.config();

const pgClient = new Client(process.env.POSTGRESQL_URL);
await pgClient.connect();

app.get('/fetch/users',async(req,res)=>{
    const fetchQuery = "SELECT * FROM st"
    try{
        const response = await pgClient.query(fetchQuery);
        return res.send(response.rows)
    }
    catch(err){
        console.log(err.message);
        res.json({
            error: err.message
        })
    }
})

app.post('/insert/user', async(req,res)=>{
    try{

    const {st_name, address } = req.body

 
        const insertQuery = 'INSERT INTO st(st_name, address) VALUES ($1, $2);'
        const response = await pgClient.query(insertQuery, [st_name, address]);
        res.status(200).json({
            success: `Signed up succesfully`
        })
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            error: err.message
        })
    }
})

app.put('/update/user',async(req,res)=>{
    const { st_name, st_address } = req.body
    const updateQuery = "UPDATE st SET st_name= $1 WHERE address=$2"
    const response = await pgClient.query(updateQuery,[st_name, st_address]);
    if(response.rowCount === 0){
        return res.status(400).json({
            message: "User not found"
        })
    }
    res.status(200).json({
        message: "Update successfull"
    })
})

app.delete('/delete/user/:id', async(req,res)=>{
    const id  = req.params.id
    if(!id){
        return res.status(400).json({
            error: "user not found with id provided"
        })
    }
    try{
    const deleteQuery = "DELETE FROM st WHERE st_usn=$1"
    const response = await pgClient.query(deleteQuery,[id])

    if(response.rowCount === 0){
        return res.status(400).json({
            error: "User not found"
        })
    }
    res.status(200).send("deleted succesfully");
}catch(err){
    console.log(err.message);
}
})


app.listen(6969, ()=>{
    console.log(`Server is live on port ${6969}`)
})
