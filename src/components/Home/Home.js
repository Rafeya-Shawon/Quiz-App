import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopics from "../QuizTopics/QuizTopics";
import Image from '../../images/quiz-img.jpg';
import './Home.css'

export const TopicContext = createContext({});


function Home(){

    const data = useLoaderData();
    
    return(
        <div className="">
            <div className="banner text-base bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg drop-shadow-sm">
            <img src={Image} alt="banner" className="drop-shadow-sm rounded-full hover:scale-125"/>
                <div className="banner-detail ">
                    <h1 className="text-4xl font-bold text-orange-200">Welcome to Tech KBC</h1>
                    <p className="text-lg text-white mt-5">Put your knowledge about Web Tech to test with our quiz and have some nerdy fun in the process.
                    Take our quiz to find out how much you know about technology and learn a thing or two about the tech topics that will reshape our future - for better or worse.
                    </p>
                </div>
            </div>
            
            <TopicContext.Provider value={data}>
                <QuizTopics></QuizTopics>
            </TopicContext.Provider>
        </div>  
    );
}

export default Home;