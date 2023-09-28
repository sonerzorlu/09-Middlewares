"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/*==========================================================================*

// Middleware:
app.get('/', (req, res, next) => {

req.customData = 'Custom Data'
res.customDataInResponse = 'Custom Data In Response'

  next()
  res.send({
    message: "Middleware",
  })
})


app.get('/', (req, res) => {
  res.send({
    customData: [
        req.customData,
        res.customDataInResponse
    ],
    message: 'data transfared from middleware with ; req anda res , parameters'
})})

/* ------------------------------------------------------- */

/*==========================================================================*

//! next() for next callBackFunction:

const middlewareFunction1 = (req,res,next) =>{
    req.customData = 'Custom Data'
    res.customDataInResponse = 'Custom Data In Response'
    next()
}
//
const middlewareFunction2 = (req,res,next) =>{

    // next()

    res.send({
        customData: [
            req.customData,
            res.customDataInResponse
        ],
        message: 'this is func2. first next() running'
})}

//
app.get('/', middlewareFunction1, middlewareFunction2,(req, res) => {
    res.send({
      customData: [
          req.customData,
          res.customDataInResponse
      ],
      message: 'data transfared from middleware with ; req anda res , parameters'
  })})

  /*==========================================================================*
  const middlewareFunction1 = (req,res,next) =>{

    const skip = req.query.skip ?? false


    req.customData = 'Custom Data'
    res.customDataInResponse = 'Custom Data In Response'

    if(skip){
        next('route')
    }else{
        next()
    }
    
}
//
const middlewareFunction2 = (req,res,next) =>{

    // next()

    res.send({
        customData: [
            req.customData,
            res.customDataInResponse
        ],
        message: 'this is func2. first next() running'
})}

//
app.get('/', middlewareFunction1, middlewareFunction2,(req, res) => {
    res.send({
      customData: [
          req.customData,
          res.customDataInResponse
      ],
      message: 'data transfared from middleware with ; req anda res , parameters'
  })})

//
app.get('/',(req, res) => {
    res.send({

 message: 'data transfared from middleware with ; req anda res , parameters'
  })})


 /*==========================================================================*/

const middlewareFunction1 = (req, res, next) => {
  const skip = req.query.skip ?? false;

  req.customData = "Custom Data";
  res.customDataInResponse = "Custom Data In Response";

  if (skip) {
    next("route");
  } else {
    next();
  }
};

//
app.get("/", (req, res) => {
  res.send({
    message: "data transfared from middleware with ; req anda res , parameters",
  });
});

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
