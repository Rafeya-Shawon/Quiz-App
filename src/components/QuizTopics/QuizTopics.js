import React, { useContext } from "react";
import { TopicContext } from "../Home/Home";
import Topic from "../Topic/Topic";
import './QuizTopics.css'


function QuizTopics(){

    const data = useContext(TopicContext);
    
    return (
        <div className="topic-list">
            {
                data.data.map(elem => <Topic key={elem.id} data={elem}></Topic>)
            }     
        </div>
    );
}


export default QuizTopics