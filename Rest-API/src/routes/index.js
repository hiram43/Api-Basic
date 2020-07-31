const { Router } = require("express");


const router= Router();

router.get('/',(req,res)=>{
    res.json({"titulo":"Hello World"});
})

router.get('/test',(req,res)=>{
    res.send("<h1>test route</h1>");
})

router.get('/json',(req,res)=>{
    const name ={
        "First":"Gabriel",
        "Second ": "Soto",
        "Job" :"Developer"
    }
    res.json(name);
   
})



module.exports = router;