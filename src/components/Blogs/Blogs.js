import React from "react";
import  './Blogs.css'

function Blogs(){


    return (
        <div className="qa">
            <h1>Questions and Answers:</h1>
            <div className="qa-details">
                <p><strong>1.Qus:</strong> What is the purpose of <strong>React Router</strong>?</p>
                <p><strong>Ans:</strong> React Router helps to develop single page application by routing through pages without page refresh.</p>
            </div>
            <div className="qa-details">
                <p><strong>2.Qus:</strong> How does <strong>Context API</strong> works?</p>
                <p><strong>Ans:</strong> Context API make a path way, in which data can be passed from parent node to child or leaf node without props drilling. </p>
            </div>
            <div className="qa-details">
                <p><strong>3.Qus:</strong> About <strong>useRef</strong> hook.</p>
                <p><strong>Ans:</strong> The useRef Hook allow us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.</p>
            </div>
        </div>
    );
}

export default Blogs;