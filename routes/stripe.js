
const router = require("express").Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);



router.post("/payments", async (req,res,next)=>{
    stripe.charges.create({
        source : req.body.tokenId,
        amount : req.body.amount,
        currency : "inr",
    } , (err, res)=>{
        if(err){
            res.status(500).json(err)
        }else{
            res.status(200).json(res)
        }
    })
})