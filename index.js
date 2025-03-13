const express = require('express');
// import the express files
const app = express();
// create an express app instance
const mainRoutes = require('./view/main.routes.js');

app.use(express.json());
//parses the incoming request with JSON payloads
//localhost:3000/about-> GET -> your server recieves the request->
//-> middleware
// handle->response->"About us page"

//this process is called LOGGING ex logger, morgan
app.use((req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().toLocaleTimeString();
    //local format of time 
    console.log(`METHOD: ${method}, URL: ${url}, Time: ${time}`);

    next();
});


//express app -> get, post, put, delete
// localhost:3000/ -> GET -> "Hello World"
// route implementation through express.js
//express instance (app) -> get method -> route -> callback function
app.get("/", (req, resp)=>{
    resp.send("Hello World");
    console.log("route handled")
});

app.use(mainRoutes);

//port listener, that listens to the port 3000
//any request that comes on port 3000 will be handled by this server 
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})


// javascript-> line by line 