import React, { useState, useEffect } from 'react';

// Import Chart
import { Line, Bar } from 'react-chartjs-2';

// Import styles for CSS
import styles from './Chart.module.css';

// Import API
import { fetchDailyData } from '../../api';

const Chart = ({ data: {confirmed, recovered, deaths}, country }) => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    }, []);

    // Line Chart
    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true,
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        }],
                    }}
                />) : null
    );

    // Bar Chart for specific Country
    const barChart = (
        confirmed
            ? (
                <Bar 
                    data= {{
                        labels: ['Actice Cases', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                 'rgba(0, 255, 0, 0.5)',
                                 'rgba(255, 0, 0, 0.5)',
                            ],
                            data: [confirmed, recovered, deaths]
                        }]
                    }}
                    options={{
                        legend: {display: false},
                        title: {display: true, text: `Current State in ${country}`}
                    }}
                />
            ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;