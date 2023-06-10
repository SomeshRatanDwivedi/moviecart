import React, { useEffect, useState } from 'react';
import MovieCart from '../../components/movieCart/MovieCart';
import { toast } from 'react-toastify';
import styles from './allMovies.module.css'
import { getAllMovies } from '../../api';

const AllMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const allMovies = async () => {
            try {
                const result = await getAllMovies();
                if (!result.success) {
                    toast.error("Error in getting movies");
                }
                setMovies(result.data.movies)

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
                    movies && movies.map(movie => {
                        return <MovieCart key={movie.id} movie={movie} />
                    })
                }

            </ul>
        </div>
    );
}

export default AllMovies;
