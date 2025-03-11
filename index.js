const express = require('express');
// import the express files
const app = express();
// create an express app

//express app -> get, post, put, delete
// localhost:3000/ -> GET -> "Hello World"
// route implementation through express.js
//express instance (app) -> get method -> route -> callback function
app.get("/", (req, res)=>{
    res.send("Hello World");
});

//localhost:3000/welcome -> GET -> "Welcome to the world of express"
//route implementation through express.js
app.get("/welcome", (req, res)=>{
    res.send("Welcome to the world of express");
})

//port listener, that listens to the port 3000
//any request that comes on port 3000 will be handled by this server 
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
