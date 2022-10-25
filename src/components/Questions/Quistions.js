import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import './Quistions.css';

export const TickContext = createContext([]);

function Questions(){

    const [count, setCount] = useState(0);
    const {data} = useLoaderData();


    const handleTicks = (status)=>{
        setCount(status + 1);
    }
    const contextValue = {func: handleTicks, state: [count, setCount]};

    return(
        <TickContext.Provider value={contextValue}>
                <div className="quiz-container">
                <div className="quiz-info">
                    <div className="quiz-header text-2xl text-orange-500  p-8">
                        <img src={data.logo} alt="language logo" className="w-8 mr-3"></img>
                        <h3 className="font-bold">{data.name} Quiz Set</h3>
                    </div>
                    <div className="quiz-list">
                        <div className="quiz-set">
                            {
                                data.questions.map((el, idx)=> <Quiz key={el.id} data={el} idx = {idx} func={handleTicks}></Quiz>)
                            }
                        </div>
                    </div>
                </div>
                <div className="answer-count text-xl mt-5 font-bold text-orange-500 p-6">
                    <h4>Total Correct Answer:</h4>
                    <p>{count}</p>
                </div>
            </div>
        </TickContext.Provider>
    );
}

export default Questions;