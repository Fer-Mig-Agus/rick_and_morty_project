import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "../../assets/styles/components/Nav/Nav.module.css"

class  Nav extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className={styles.content}>
            
            <div className={styles.contentLink}>
            <Link to="/"><h3 className={styles.item} >Inicio</h3></Link>
            <Link to="/home"><h3 className={styles.item} >Home</h3></Link>
            <Link to="/about"><h3 className={styles.item} >About</h3></Link>
            
            </div>
            <div className={styles.contentSearch}>
            <SearchBar onSearch={this.props.onSearch}/>
            </div>
            
            
            </div>
            );
    }
    
};

export default Nav;