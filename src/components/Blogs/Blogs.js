import React from "react";
import  './Blogs.css';

function Blogs(){


    return (
        <div className="text-lg m-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg py-5 px-3 text-left text-slate-100">
            <h1 className="text-6xl font-bold text-orange-500 text-center my-5">Blogs</h1>
            <div className="  m-5">
                <p className="text-xl font-semibold my-3"><strong>1.</strong> What is the purpose of React Router?</p>
                <p><strong>Ans: </strong>A common library for routing in React is called React Router. It permits switching between views of different React Application components, permits changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className="m-5">
                <p className="text-xl font-semibold my-3"><strong>2.</strong> How does Context API works?</p>
                <p><strong>Ans:</strong> A front-end framework called Context API uses components to transmit data from one component to another. It seems to be data traveling between parent and child components. Different components with the program are required for some props, such as UI themes, language preferences, local settings, and others.</p>
            </div>
            <div className="m-5">
                <p className="text-xl font-semibold my-3"><strong>3.</strong>What do you know about useRef() hook?</p>
                <p><strong>Ans:</strong> The React Hooks API includes the useRef hook. It is a function that only accepts one argument at most and outputs an Object. The argument supplied to useRef is the value of the current property on the returned object. Its current property is set to undefined if it is invoked without a parameter.</p>
            </div>
        </div>
    );
}

export default Blogs;