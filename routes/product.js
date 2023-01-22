const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

// Create
router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const newProduct = new Product(req.body);

    try{
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    }catch(err){
        res.status(401).json(err);
    }
})

// Update
router.put("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true})

        res.status(201).json(updatedProduct);
    }
    catch(err){
        res.status(401).json(err);
    }
})

// Delete
router.delete("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);

        res.status(201).json("Product deleted successfully!");
    }catch(err){
        res.status(401).json(err);
    }
})

// Get Product
router.get("/find/:id", async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(201).json(product);
    }catch(err){
        res.status(401).json(err);
    }
})

// Get All Products
router.get("/", async(req, res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try{
        let products;

        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(10);
        }
        else if(qCategory){
            products = await Product.find({categories: {
                $in: [qCategory]
            }})
        }
        else{
            products = await Product.find();
        }

        res.status(201).json(products);
    }catch(err){
        res.status(401).json(err);
    }
})

module.exports = router;