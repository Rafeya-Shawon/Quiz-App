import React from "react";
import './NotFound.css'
import { faChainBroken } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NotFound(){

    return (
        <div className="nf">
            <h1 className="nf-msg">Oops! ...</h1>
            <p className="text-xl">404 NOT FOUND <span><FontAwesomeIcon icon={faChainBroken}></FontAwesomeIcon></span></p>
            
        </div>
    );
}

export default NotFound;