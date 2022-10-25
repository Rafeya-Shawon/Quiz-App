import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import './Options.css'
import { TickContext } from "../Questions/Quistions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Options({stateData, qus, ca, op}){

    const [tick3, setTick3] = useState(false);
    const [data, setData] = useState({qus, ca, op});
    const {func, state} = useContext(TickContext);

    const answerHandler = (qus)=>{
        console.log(qus);
        console.log(stateData);
        let arr = [];
        if(stateData[0].includes(qus)){
            toast('Already Checked!');
        }else{
            setTick3(!tick3);

            if(data.op === data.ca){
                func(state[0]);
                toast('Correct Answer!');
            }else{
                toast('Wrong Answer!');
            }
            
            arr.push(qus);
            stateData[1]([...stateData[0], ...arr]);
            console.log(stateData[0]);
        }
    }

    return(
        <div onClick={()=> answerHandler(data.qus)} className="option-container text-sm">
            <FontAwesomeIcon className='text-orange-500' icon={ tick3 ? faCircleCheck : faCircle}></FontAwesomeIcon>
            <span>{op}</span>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default Options;