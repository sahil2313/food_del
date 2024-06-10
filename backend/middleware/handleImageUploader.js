


const checkFileField = (req , res , next)=>{
    
    if (!req.file) {
        // If no file was uploaded, send a 400 Bad Request response with an error message
        return res.status(400).send({ success: false, message: "Image not uploaded" });
    }
next()
}


module.exports = checkFileField
