const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000;

const app = express()
app.use(bodyParser.json())

//USE MOCK DATA
const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]


app.post('/login', function (req, res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = "billy the rick";
    const mockPassword = "super set";

    if(username === mockUsername && password === mockPassword){
        res.json({
            success: true,
            message: 'password and username matched',
            token: 'encrypted token goes here'
        })
    }else{
        res.json({
            success: false,
            message:"Haba, password and username do not match"
        })
    }
})
app.get("/users/:id", (req, res)=>{
    res.json({
        success: true,
        message:'successfully got users. Nice',
        users: req.params.id
    })
})


app.get("/users", (req, res)=>{
    res.json({
        success: true,
        message: "successfully got users. Nice",
        users: mockUserData
    })
})
app.listen(PORT, ()=>console.log(`started server on localhost:${PORT}`))