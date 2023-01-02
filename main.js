const express = require('express')
const fs = require("fs")
const todo_route = require("./Routes/todos")
const user_route = require("./Routes/user")
// const path = require("path")

const app = express()
const port = 3000

//  Middleware Code
app.use(express.urlencoded({extended:true})) // decode body from post request
// this line to mean that all filles wanted by the programm will find it in assets
app.use(express.static('assets'));

app.use('/todos',todo_route);
app.use('/user',user_route);







app.listen(port, () => console.log(`Example app listening on port ${port}!`))