const foodModel = require('../models/foodModel')
const fs = require('fs')

//add food item

const addFood = async(req , res)=>{
    console.log(req.body)
    const image_filename = req.file.filename
    console.log(image_filename)
    const food = new foodModel({
        ...req.body,
        image : image_filename
    })
    try{
       await food.save();
       res.json({success : true , message : "Food Added"})
    }catch(e){
        console.log(e)
        res.json({sucess : false , message : e})
    }
}

//all food list

const listFood = async(req , res)=>{
    try{
        const foodList  = await foodModel.find({})
        res.json({success : true , data : foodList})
    }catch(e){
        console.log(e)
        res.json({success : false , message : e})
    }
}

// remove food

const removeFood = async (req, res) => {
    console.log(req.params.id);
    try {
        const food = await foodModel.findById(req.params.id);
        
        if (!food) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }

        // Remove the image from the uploads folder
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.error("Error removing image:", err);
            }
        });

        // Delete the food item from the database
        await foodModel.findByIdAndDelete(req.params.id);
        
        res.json({ success: true, message: "Food Removed" });
    } catch (error) {
        console.error("Error removing food:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};





module.exports = {addFood , listFood , removeFood}