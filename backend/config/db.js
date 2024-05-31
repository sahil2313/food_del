const mongoose = require('mongoose')


 const connectDB = async()=>{
    await mongoose.connect(process.env.MONGOURL).then(()=> console.log("DB connected"))
}

module.exports = connectDB