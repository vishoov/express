//express provides a tool to support MVC Architecture
//Router -> express.Router()
const router = require('express').Router();
//create a router instance
const { product, signup } = require('../controller/main.controller.js');

//localhost:3000/welcome -> GET -> "Welcome to the world of express"
//route implementation through express.js
router.get("/welcome", (req, res)=>{
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
router.get("/welcome/:name", (req, res)=>{
// req:{Headers-technical details, body- data, params, query, method, url}

    const name = req.params.name;
    res.send(`Welcome ${name}`);
})



//middleware -> function that has access to the request and response object
// it is implemented in the middle of the request and response cycle


// ecommerce -> products -> title -> title -> localhost:3000/products/title
// localhost:3000/products/1 -> GET -> "Product 1"
// localhost:3000/products/2 -> GET -> "Product 2"
// localhost:3000/products/3 -> GET -> "Product 3"
router.get("/products/:title", (req, res)=>{
    const title = req.params.title;
    res.send(`Produdct ${title}`)
})
// route parameter -> /products/:title -> localhost:3000/products/1 -> title = 1
// query parameter -> /products?title=1 -> title = 1 -> localhost:3000/products?title=1
//query parameters
router.get("/products", product );
//always helpful for searching and filtering data
//size: 8, color: red, price: 1000

//sign up page 
//localhost:3000/signup -> POST -> "Sign up page"
router.post("/signup", signup)

// -> sign up -> im sending my information to the server 

// MIDDLEWARE
// app.use();

router.use((req, res, next)=>{
    console.log("Middleware executed");
    
    next();
})
const authMiddleware = (req, res, next)=>{
    console.log("Authentication done");
    //security logic
    next();
}

// request -> authenticate (middleware)->handled
router.get("/secret", authMiddleware, (req, res)=>{
    res.send("Secret page");
})



// //app.method("route", callback function)
// router.get("/signup", (req, res)=>{
//     res.send("Sign up page get request");
// })


module.exports = router;