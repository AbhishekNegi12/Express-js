//How Request Respponse Cycle Works
//if it matches the request end point i.e the routing it will execute

//MIDDLEWARE IS BASICALLY A FUNCTION THAT WILL RUN BEFORE EVERY REQUEST AND IT HAS BOTH REQ AND RES OBJECT AND IT CAN MODIFY REQUEST 
// WITH THE HELP OF MIDDLEWARE YOU CAN VALIDATE COOKIE, LOGGING n 
const express = require('express')
const app = express()
const port = 3000

const fs = require("fs")
const birds = require('./birds')
// built in middleware
// app.use(express.static("public"))



app.use('/birds', birds)

// const myLogger = function (req, res, next) {
//     console.log('LOGGED') 
//     next()
//   }


//next means next middleware
// if there is no next function request will be hanging

//Middleware 1  - logger for an application
app.use((req, res, next)=> {
    console.log(req.headers);
    req.abhi = "I am Abhishek";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // console.log('LOGGED M1')
    next()
})

//Middleware 2
app.use((req, res, next)=> {
    console.log('LOGGED M2')
    next()
})

// Middleware modifies our request
// req object and res object

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!'+ req.abhi)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})