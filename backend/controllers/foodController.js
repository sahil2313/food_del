const foodModel = require('../models/foodModel')
const fs = require('fs')

//add food item

const addFood = async(req , res)=>{
    const image_filename = req.file.filename
    console.log(image_filename)
    const food = new foodModel({
        ...req.body,
        image : image_filename
    })
    try{
       await food.save();
       res.json({success : true , mesage : "Food Added"})
    }catch(e){
        console.log(error)
        res.json({sucess : false , message : e})
    }
}

//all food list

const listFood = async(req , res)=>{
    try{
        const foodList  = await foodModel.find()
        res.json(foodList)
    }catch(e){
        console.log(e)
        res.json({success : false , message : e})
    }
}




module.exports = {addFood , listFood}