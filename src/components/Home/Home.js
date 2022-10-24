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
            <div className="banner">
            <img src={Image} alt="banner"></img>
                <div className="banner-detail">
                    <h1>Participate in our <span className="app-name"> Tech KBC</span></h1>
                    <p>
                        Judge your <strong>Web language</strong> knowledge. By selecting any of the following <strong>Web Technologies</strong>.
                        Our question set sufficient enough to provide you basic idea about your knowledge!
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