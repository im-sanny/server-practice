const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('practicing making server')
})

app.get('/practice', (req, res) =>{
    res.send('new server page')
})

app.listen(port, ()=>{
    console.log(`practice server running on port: ${port}`);
})