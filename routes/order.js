const Order = require("../models/Order");
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

// Create
router.post("/", verifyToken, async(req, res)=>{
    const newOrder = new Order(req.body);

    try{
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    }catch(err){
        res.status(401).json(err);
    }
})

// Update
router.put("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true})

        res.status(201).json(updatedOrder);
    }
    catch(err){
        res.status(401).json(err);
    }
})

// Delete
router.delete("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);

        res.status(201).json("Order product deleted successfully!");
    }catch(err){
        res.status(401).json(err);
    }
})

// Get User Orders
router.get("/find/:userId", verifyTokenAndAuth, async(req,res)=>{
    try{
        const orders = await Order.find({userId: req.params.userId});
        res.status(201).json(orders);
    }catch(err){
        res.status(401).json(err);
    }
})

// Get All Orders
router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const Orders = await Order.find();

        res.status(201).json(Orders);
    }catch(err){
        res.status(401).json(err);
    }
})

// Order stats
router.get("/stats", verifyTokenAndAdmin, async(req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try{
        const income = await Order.aggregate([
            {
                $match: {createdAt: {$gte: prevMonth}}
            },
            {
                $project: {month: {$month: "$createdAt"}, sales:"$amount"}
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: "$sales" }
                }
            }
        ])

        res.status(201).json(income);
    }catch(err){
        res.status(401).json(err);
    }
})

module.exports = router;