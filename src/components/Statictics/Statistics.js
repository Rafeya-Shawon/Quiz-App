import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css'

function Statistics(){

    const data = useLoaderData();

    return (
        <div className="stat">
            <h2>Quiz Statistics</h2>
            <div>
                <LineChart width={600} height={400} data={data.data}>
                    <Line type="monotone" dataKey="total" stroke="#083ba9" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip/>
                </LineChart>
            </div>
        </div>
    );
}

export default Statistics;