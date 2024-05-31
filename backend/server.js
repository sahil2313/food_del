const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const foodRouter = require('./routes/foodRoute')
dotenv.config()
//app config 

const app = express()
const port = 4000


//middleware
app.use(express.json())
app.use(cors())


// db connection 
connectDB()



//api endpoints
app.use( "/api/food",foodRouter)
app.use("/images" , express.static('uploads'))

app.get("/",(req , res)=>{
    res.send("API Working")
})


app.listen(port , ()=>{
    console.log(`Server started on http://localhost:${port}`)
})


// mongodb+srv://sahilmalekar23:uLmKL2e59y8MwULM@cluster0.gutkww2.mongodb.net/?