const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const mentorregModel = require("./mentorregModel/mentorregModel")


var mentorreg=Express()

mentorreg.use(Cors())
mentorreg.use(Bodyparser.json())
mentorreg.use(Bodyparser.urlencoded({extended:true}))


Mongoose.connect("mongodb+srv://college:vyshnav123@cluster0.lzmcvg5.mongodb.net/projectdb?retryWrites=true&w=majority",{useNewUrlParser:true})






mentorreg.get("/",(req,res)=>{

    res.send("Mentor Reg")
})


mentorreg.post("/mentorreg",async(req,res)=>{
    let data=new mentorregModel(req.body)
    console.log(data)
    await data.save()



    res.send(data)
})

mentorreg.get("/",async(req,res)=>{

    let data=await mentorregModel.find()
    res.send(data)

})


mentorreg.listen(3900)