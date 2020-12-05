import React, { useState, useEffect } from 'react';

// Import API
import { fetchDailyData } from '../../api';

const Chart = () => {

    const [dailyData, setDailyData] = useState({});

    useEffect( ()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    },[]);

    return (
        <div>
            <h1>Chart</h1>
        </div>
    )
}

export default Chart;