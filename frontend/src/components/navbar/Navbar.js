import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
         <div className={styles.navbarParent}>
            <div className={styles.leftDiv}>
              <h2>Movie Reiveiw</h2>

            </div>
            <div className={styles.midDiv}>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/all-movies'>
                    All movies
                </Link>
                <Link to='/add-movie'>
                    Add movie
                </Link>
            </div>
            <div className={styles.rightDiv}>

            </div>

         </div>
    );
}

export default Navbar;
