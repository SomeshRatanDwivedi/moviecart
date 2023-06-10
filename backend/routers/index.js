const express=require('express');
const router=express.Router();


router.get('/', (req, res)=>{
    return res.send("<h1>Its working</h1>")
})

router.use('/movies', require('./moviesRouter'))

















module.exports=router;