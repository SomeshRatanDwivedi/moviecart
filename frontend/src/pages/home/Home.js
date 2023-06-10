import React, { useEffect, useState } from 'react';
import styles from './home.module.css'
import { getAllMovies } from '../../api';
import { toast } from 'react-toastify';
import { imgUrl } from '../../constants';
import MovieCart from '../../components/movieCart/MovieCart';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const allMovies = async () => {
            try {
                const result = await getAllMovies();
                if(!result.success){
                    toast.error("Error in getting movies");
                }
                
                const someMovies=result.data.movies.slice(0, 5);
                setMovies(someMovies)

            } catch (err) {
              toast.error(err)
            }
          
        }

        allMovies();

    })

    return (
        <div className={styles.parent}>
            <ul>
                {
                    movies && movies.map(movie=>{
                        return <MovieCart key={movie.id} movie={movie}/>
                    })
                }
               
            </ul>
        </div>
    );
}

export default Home;
