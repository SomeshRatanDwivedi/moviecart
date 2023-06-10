import React from 'react';
import styles from './movieCart.module.css'
import { imgUrl } from '../../constants';

const MovieCart = ({movie}) => {
    return (
        <li className={styles.listStyle}>
            <div className={styles.upperDiv}>
                <img src={imgUrl} />
            </div>
            <div className={styles.lowerDiv}>
                <p><span>Name:</span> {movie.name}</p>
                <p><span>Ratings:</span> {movie.rating}</p>
                <p><span>Year:</span> {movie.releaseDate}</p>

            </div>
        </li>
    );
}

export default MovieCart;
