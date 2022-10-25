import React from "react";
import { Link } from "react-router-dom";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(){

    return (
        <nav className="nav-bar bg-orange-600 drop-shadow-xl">
            <Link to={'/'}><h1 className="text-2xl drop-shadow-xl italic animate-pulse "><span style={{padding: '0px 15px'}}><FontAwesomeIcon className=" animate-bounce" icon={faTerminal}></FontAwesomeIcon></span>Tech KBC</h1></Link>
            <ul className="nav-item mr-5 text-lg text-white">
                <li className="hover:bg-orange-200"><Link to={'/home'}>Home</Link></li>
                <li className="hover:bg-orange-200"><Link to={'/statistics'}>Statistics</Link></li>
                <li className="hover:bg-orange-200"><Link to={'/blogs'}>Blogs</Link></li>
            </ul>
        </nav>
        
    );
}

export default Header;