const express = require('express')
const PORT = 3000;

const app = express()

//USE MOCK DATA
const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]

app.get("/users/:id", (req, res)=>{
    res.json({
        success: true,
        message:'successfully got users. Nice',
        users: req.params.id
    })
})

app.listen(PORT, ()=>console.log(`started server on localhost:${PORT}`))