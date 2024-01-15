const Mongoose=require("mongoose")

let regSchema=Mongoose.Schema(

    {
        name:String,
        email:String,
        phonenum:String,
        password:String,
        confirmpass:String,
        gender:String
        
    }
)

let studentregModel=Mongoose.model("studentreg",regSchema)
module.exports=studentregModel