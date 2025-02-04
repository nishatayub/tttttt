const express = require("express")
const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello there")
})
app.post("/signup", async (req,res)=>{
    const {name, email, password} = req.body;
    try{
        if(!name){
           return res.status(400).send("Invalid name")
        }
        if(!email){
            return res.status(400).send("Invalid email")
        }
        if(!password){
            return res.status(400).send("Invalid password")
        }
        if (password.length>16 || password.length<4){
            return res.status(400).send("Password Too Long")
        }
        const newUser = new user({name,email,password});
        await newUser.save();
        return res.status(201).send("All good")
    }catch(err){
        console.error(err.message);
    }
})

app.listen(8080, ()=>{
    console.log("server is running at port 8080")
});

