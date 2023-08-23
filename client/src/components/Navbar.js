import React from "react";
import styles from '../styles/Navbar.module.css'
import { Link } from "react-router-dom";

//navigation panel
function Navbar(){
    return(
        <header>
            <nav className={styles.nav}>
                
                <h1 className="slogan">I KNOW A SPOT</h1>
                <ul className="nav-items">
                    <button className={styles.btn}>View as list</button>
                    <button className={styles.btn}><Link to="/create">Found a spot</Link></button>
                    <button className={styles.btn}>Contact Us</button>
                    <button className={styles.button} ><span><Link to="/username">Login</Link></span></button>
                </ul>
                
            </nav>
        </header>

    );
}
export default Navbar;