import React from "react";
import { Link } from "react-router-dom";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(){

    return (
        <nav className="nav-bar">
            <Link to={'/'}><h1><span style={{padding: '0px 15px'}}><FontAwesomeIcon icon={faTerminal}></FontAwesomeIcon></span>Tech KBC</h1></Link>
            <ul className="nav-item">
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/statistics'}>Statistics</Link></li>
                <li><Link to={'/blogs'}>Blogs</Link></li>
            </ul>
        </nav>
        
    );
}

export default Header;