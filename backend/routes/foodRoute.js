const express = require('express')
const {addFood , listFood} = require("../controllers/foodController")
const multer = require("multer")

const foodRouter = express.Router()


//image storage engine

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: function (req, file, cb) {
      cb(null, `${Date.now()} - ${file.originalname}`) // Unique filename
    }
  });
  
const upload = multer({storage : storage})

foodRouter.post("/add" , upload.single("image") , addFood)

foodRouter.get("/" , listFood)


module.exports = foodRouter