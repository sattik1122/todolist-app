const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const router =express.Router();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
const day =new Date();
const options ={
    weekday:"long",
    day:"numeric",
    month:"long"
}
const today=day.toLocaleDateString('en-IN',options)
const items=[]
const work=[]

router.get("/",(req,res,next)=>{
    res.render("view",{Title:"Today",newListItems:items})
    
})
router.post("/",(req,res,next)=>{
    // console.log(req.body)
   const listName=req.body.newItem;
   const listTitle=req.body.title
   if(listTitle==="Today"){
    const newItem=req.body.newItem;
    items.push(newItem)
    res.redirect("/")
   }else{
    work.push(listName)
    res.redirect("/"+listTitle)
   }
    
})
// creating new task
router.get("/:new",(req,res,next)=>{
    res.render("view",{Title:req.params.new,newListItems:work})

})





app.use(router)
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})