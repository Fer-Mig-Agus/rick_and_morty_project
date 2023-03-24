import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../../assets/styles/components/Nav/Nav.module.css"

const Nav = ({ onSearch }) => {

    const { pathname } = useLocation();

    return (
        <div className={styles.content}>

            <div className={styles.contentLink}>
                <Link to="/"><h3 className={styles.item} >Login</h3></Link>
                <Link to="/home"><h3 className={styles.item} >Home</h3></Link>
                <Link to="/favorite"><h3 className={styles.item} >Favorites</h3></Link>
                <Link to="/about"><h3 className={styles.item} >About me</h3></Link>
                
            </div>
            {/* <div className={styles.contentSearch}>
                <SearchBar onSearch={onSearch} />
            </div> */}

            {pathname === "/home" && <div className={styles.contentSearch}>
                <SearchBar onSearch={onSearch} />
            </div>
            }
        </div>

    );


};

export default Nav;