import React, { useState } from 'react';
import styles from './newMovie.module.css'
import { toast } from 'react-toastify';
import { addNewMovie } from '../../api';



const NewMovie = () => {
    const [name, setName]=useState('');
    const [rating, setRating] = useState('')
    const [releaseDate, setReleaseDate] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
      try{
        const result=await addNewMovie({name, rating, releaseDate});
        console.log(result)
        if(result.success){
            toast.success("your movie is added")
        }
        else{
            toast.error("Something went wrong")
        }

      }catch(err){
        toast.error(err)
      }
      setName('');
      setRating('')
      setReleaseDate('')
  }
    return (
        <div className={styles.parent}>
            <form onSubmit={handleSubmit}>
              <h2>Add New Movies</h2>
                <div>
                  <label>Name</label>
                  <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Somesh'/>
                
                </div>
                <div>
                    <label>Rating</label>
                    <input type='number' placeholder='Between 1 to 5' name='rating' value={rating} onChange={(e)=>setRating(e.target.value)} />
                  
                </div>
                <div>
                    <label>Year</label>
                    <input type='number' placeholder='2023' name='releaseDate' onChange={(e) => setReleaseDate(e.target.value)} value={releaseDate}/>
                   

                </div>
                <div>
                    <button type='submit'>Add</button>
                    

                </div>

            </form>

        </div>
    );
}

export default NewMovie;
