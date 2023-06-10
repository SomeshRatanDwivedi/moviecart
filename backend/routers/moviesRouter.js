const express=require('express');

const router=express.Router();
const moviesController=require('../controllers/moviesControllers')


router.get('/', (req, res)=>{
    return res.send("<h1>Movies route is working</h1>")
})

router.get('/all-movies', moviesController.getAllMovies);
router.post('/new-movie', moviesController.addNewMovie)





















module.exports=router;

