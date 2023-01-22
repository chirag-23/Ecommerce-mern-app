const router = require("express").Router()
const KEY = process.env.STRIPE_KEY

const stripe = require('stripe')('sk_test_51LEBwfSGkRlZhcg2Jpa3W81Xd2jV7uiG01AKJSITWVu12pjgB0xZB3T5NJ2jFmzRc3X0v5nd3YdpEW8amb07gwUJ00TyVmlBZO');

router.post("/payment", (req,res)=>{
    stripe.charges.create({
        source : req.body.tokenId,
        amount : req.body.amount,
        currency : "usd",
    }, 
    (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(401).json(stripeErr)
        }else{
            res.status(201).json(stripeRes)
        }
    })
})

module.exports = router;