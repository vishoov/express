const product = (req, res)=>{
    const title = req.query.title;
    // res.send(`Product ${title}`);
    console.log(title);
    const price = req.query.price;
    console.log(price);
    const color= req.query.color;
    res.send(`Price ${price}, Title: ${title}, Color: ${color}`);
    
}


const signup = (req, res)=>{
    const data = req.body;
    console.log(data); 
    //sign up logic 
    res.send("Sign up page post request");
}

module.exports = { product, signup };