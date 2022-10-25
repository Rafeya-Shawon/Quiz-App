import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css'

function Statistics(){

    const data = useLoaderData();

    return (
        <div className="statstics bg-gradient-to-r from-violet-500 to-fuchsia-500 pb-56">
            <h2 className="text-2xl font-bold text-orange-400">Quiz Statistics</h2>
            <div>
                <LineChart width={600} height={400} data={data.data} >
                    <Line type="monotone" dataKey="total" stroke="#e69500"/>
                    <XAxis dataKey="name" stroke="#000000"/>
                    <YAxis stroke="#000000"/>
                    <Tooltip/>
                </LineChart>
            </div>
        </div>
    );
}

export default Statistics;