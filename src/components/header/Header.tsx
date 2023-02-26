import React from 'react';
import classes from "./Header.module.css";
import Top from './top_of_header/Top';
import Navbar from './navigation/Navbar';


const Header = (props: any) => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <Top/>
                <Navbar/>
            </div>
        </div>
    )
}
export default Header;