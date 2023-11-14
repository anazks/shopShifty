
const { response } = require("express");
const productModel = require("../Models/Addproductmodel")
const getProduct = async (req,res)=>{
    try {
       let products = await productModel.find()
       res.json(products);
    } catch (error) {
        console.log(error)
    }
}
const addproduct = async (req,res)=>{
    console.log(req.body)
    // console.log(req.files)
    console.log("am here at add p")
    const {image} = req.files;
    console.log(image)
    try {
        let product = await productModel.create(req.body)
       await image.mv('./Public/Images/Products/' + product._id +".jpg").then((err)=>{
            if(!err){
                res.json(true)
            }else{
                console.log(err)
            }
        })
       
    } catch (error) {
        console.log(error);
        
    }
}

const test = (req,res)=>{
        console.log("Test working..")
}

module.exports = {addproduct ,test, getProduct}

