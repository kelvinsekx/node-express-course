const express = require('express')
const PORT = 3000;

const app = express()

app.get("/", (req, res)=>{
    res.send("yaya!")
})

app.listen(PORT, ()=>console.log(`started server on localhost:${PORT}`))