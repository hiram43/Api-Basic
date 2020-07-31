const {Router} = require('express');
const _ = require('underscore'); //Navigate throug objects 
const router = Router();

const movies = require('../routes/samples.json');


//Get petition
router.get('/movies',(req,res)=>{
    res.json(movies)
});


//Post Petition
router.post('/movies',(req,res)=>{
    const{id,title,director,year,Rating}=req.body;
    if(title && id&&director&&year&&Rating){
        const NewMovie ={...req.body}
        movies.push(NewMovie)
        
    }else{
        res.status(500).json({error: 'there was an error'})
    }

    
});


//Update petition
router.put('/movies/:id',(req,res)=>{
    const {id} =req.params;
    const {title,director,year,Rating} = req.body;
    if(title && director && year && Rating){
        _.each(movies,(movie,i)=>{
            if(movie.id== id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.Rating = Rating;
            }
        })
        res.json(movies)
    }else{
        res.status(500).json({error: "error "})
    }
    });
    
    







//Delete Petition
router.delete('/movies/:id',(req,res)=>{
    const {id} =req.params;
    _.each(movies,(movie,i)=>{
        if(movie.id==id){
            movies.splice(i,1);
        }
    });
    res.send("deleted")
    //const {} =req.param
});




module.exports = router;