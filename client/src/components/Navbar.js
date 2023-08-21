import React from "react";
import styles from '../styles/Navbar.module.css'
//navigation panel
function Navbar(){
    return(
        <header>
            <nav className={styles.nav}>
                
                <h1 className="slogan">FOODIE</h1>
                <ul className="nav-items">
                    <button className={styles.btn}>Found a Spot</button>
                    <button className={styles.btn}>Contact Us</button>
                    <button className={styles.button} ><span>Login </span></button>
                </ul>
                
            </nav>
        </header>

    );
}
export default Navbar;