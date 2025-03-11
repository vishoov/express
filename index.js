const express = require('express');
// import the express files
const app = express();
// create an express app

app.use(express.json());
//parses the incoming request with JSON payloads

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
    // res.send("Welcome to the world of express");
    // res.status(201)
    //send a file
    // res.sendFile(__dirname + "/index.html");
})
// request -> url, method, headers, body -> this is the data that is sent from the client to the server 
//handle -> handler function 
//response -> data that is sent from the server to the client


//dynamic routing 
app.get("/welcome/:name", (req, res)=>{
// req:{Headers-technical details, body- data, params, query, method, url}

    const name = req.params.name;
    res.send(`Welcome ${name}`);
})

//middleware -> function that has access to the request and response object
// it is implemented in the middle of the request and response cycle

//localhost:3000/about-> GET -> your server recieves the request->
//-> middleware
// handle->response->"About us page"

app.use((req, res, next)=>{
    console.log("Request recieved")
    console.log("Middleware executed");
    next();
})

// ecommerce -> products -> title -> title -> localhost:3000/products/title
// localhost:3000/products/1 -> GET -> "Product 1"
// localhost:3000/products/2 -> GET -> "Product 2"
// localhost:3000/products/3 -> GET -> "Product 3"
app.get("/products/:title", (req, res)=>{
    const title = req.params.title;
    res.send(`Produdct ${title}`)
})
// route parameter -> /products/:title -> localhost:3000/products/1 -> title = 1
// query parameter -> /products?title=1 -> title = 1 -> localhost:3000/products?title=1
//query parameters
app.get("/products", (req, res)=>{
    const title = req.query.title;
    // res.send(`Product ${title}`);
    console.log(title);
    const price = req.query.price;
    console.log(price);
    const color= req.query.color;
    res.send(`Price ${price}, Title: ${title}, Color: ${color}`);
    
} )
//always helpful for searching and filtering data
//size: 8, color: red, price: 1000


//sign up page 
//localhost:3000/signup -> POST -> "Sign up page"
app.post("/signup", (req, res)=>{
    const data = req.body;
    console.log(data); 
    //sign up logic 
    res.send("Sign up page post request");
})

// -> sign up -> im sending my information to the server 

//app.method("route", callback function)
app.get("/signup", (req, res)=>{
    res.send("Sign up page get request");
})

//port listener, that listens to the port 3000
//any request that comes on port 3000 will be handled by this server 
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})
