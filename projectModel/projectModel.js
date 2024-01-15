const Mongoose=require("mongoose")
let projectSchema=Mongoose.Schema(

    {
        email:String,
        password:String
    }
)

let projectModel=Mongoose.model("project",projectSchema)
module.exports=projectModel