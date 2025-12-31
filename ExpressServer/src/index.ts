import express from "express";
const app = express();
const PORT=6969;

app.get("/info",(req,res)=>{
    return res.status(200).json({
        message : "hello"
    })
})

app.post(`/todos/:id`,(req,res)=>{
    const idx = req.body.id;
    console.log(idx);
})

app.post('/user',(req,res)=>{
    const {name, email} = req.body;
    if(!name || !email){
        return res.status(400).json({
            message: "Ivalid credentials"
        });
    };
    return res.status(200).json({
        message: "User valid"
    });
});

app.listen(PORT,()=>{
    console.log(`server is live at port ${PORT}`)
})

