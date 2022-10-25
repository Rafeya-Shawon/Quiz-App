import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopics from "../QuizTopics/QuizTopics";
import Image from '../../images/quiz-img.jpg';
import './Home.css'

export const TopicContext = createContext({});


function Home(){

    const data = useLoaderData();
    
    return(
        <div>
            <div className="banner text-base ">
            <img src={Image} alt="banner" className="drop-shadow-sm"/>
                <div className="banner-detail">
                    <h1 className="text-2xl">Participate in our <span className="text-xl font-bold"> Tech KBC</span></h1>
                    <p className="text-lg text-black mt-5">Judge your <strong className="font-bold">Web language</strong> knowledge. By selecting any of the following <strong className="font-bold">Web Technologies</strong>. Our question set sufficient enough to provide you basic idea about your knowledge!
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