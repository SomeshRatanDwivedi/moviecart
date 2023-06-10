const movies=require('../movies')

module.exports.getAllMovies=async(req, res)=>{
    try{
        
        return res.status(200).send({
            success:true,
            message:"All movies",
            data:{
                movies
            }
        })
    

    }catch(error){
        console.log("err in get all movies", error);
        return res.status(500).send({
            message:"Internal server error",
            success:false
        })
    }
}

module.exports.addNewMovie=async(req, res)=>{
    try {
             console.log(req.body)
        const {name, rating, releaseDate}=req.body;

        const isMovieAllReadyPresent=movies.filter(movie=>movie.name===name);
        const currentYear=new Date().getFullYear();

   

        if(!name || !rating || rating<0 || rating>5 || !releaseDate || releaseDate>currentYear || isMovieAllReadyPresent.length>0){
            return res.status(400).send({
                success:false,
                message:"Something went wrong try again with suitable data"
            })
        }
        const currentTime=new Date().getMilliseconds();
        movies.push({...req.body, id:currentTime});

        return res.status(200).send({
            success: true,
            message: "Your movie is added",
        })



    } catch (error) {
        console.log("err in add new movie", error);
        return res.status(500).send({
            message: "Internal server error",
            success: false
        })
    }
}