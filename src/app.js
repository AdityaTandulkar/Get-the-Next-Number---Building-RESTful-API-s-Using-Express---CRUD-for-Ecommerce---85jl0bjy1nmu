const express = require('express');
const app = express();

//Middlewares
app.use(express.json());

// Write a GET Request to get the next number from the input 'num'.
// Endpoint : /api/get-next-num
// Return the response as {message : , status: }


app.get("/api/get-next-num", (req, res)=>{
    const {num} = req.body;

    if(num && typeof num === "number"){
        res.status(200).json({
            "message": num+1,
            "status": "success"
        });
    }
    else{
        res.status(400).json({
            "message": "error",
            "status": "failure"
        })
    }
})

module.exports = app;
