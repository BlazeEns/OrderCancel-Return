import React from 'react';
import { useState, useEffect } from 'react';
// import { Bar, Line } from 'react-chartjs-2';
import './Analytics.css';
// import Chart from 'chart.js/auto';
// import jwt_decode from "jwt-decode";
// import { CategoryScale } from 'chart.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { useParams } from 'react-router-dom';
// Chart.register(CategoryScale);
import Layout from '../components/layout';


function Analytics() {
    // const { shopName } = useParams();
    // console.log("line17", shopName);
    // const code = sessionStorage.getItem("code");
    // var decoded = jwt_decode(code);
    // const shopName = decoded.jwttoken;
    // console.log("line 19 ==>>", shopName);
    const [newDate, setNewDate] = useState(new Date());
    const [apiData, setApiData] = useState(null);
    // const [apiDataRange, setApiDataRange] = useState(null);
    // const [startDate, setStartDate] = useState(new Date("2024-01-12"));
    // const [endDate, setEndDate] = useState(new Date("2024-01-13"));
    // Dummy data for the line chart

    // const defaultCounts2 = { totalCount: 0, yesCount: 0, noCount: 0 };



    //   const lineChartData = {
    //     labels: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'],
    //     datasets: [
    //       {
    //         label: 'Daily Sales',
    //         fill: false,
    //         lineTension: 0.1,
    //         backgroundColor: 'rgba(75,192,192,0.4)',
    //         borderColor: 'rgba(75,192,192,1)',
    //         borderCapStyle: 'butt',
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: 'miter',
    //         pointBorderColor: 'rgba(75,192,192,1)',
    //         pointBackgroundColor: '#fff',
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //         pointHoverBorderColor: 'rgba(220,220,220,1)',
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 1,
    //         pointHitRadius: 10,
    //         data: [65, 59, 80, 81, 56],
    //       },
    //     ],
    //   };
    const defaultCounts = {
        totalCount: 10,
        yesCount: 5,
        noCount: 5,
    };

    // useEffect(() => {
    //   const fetchDataRange = async () => {
    //     try {
    //       const response = await fetch('http://localhost:3000/tillDate', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           shopName: 'ens241-shubhamsrivastava-store.myshopify.com',
    //           startDate: startDate.toISOString().split('T')[0],
    //           endDate: endDate.toISOString().split('T')[0],
    //         }),
    //       });

    //       if (response.ok) {
    //         const data = await response.json();
    //         setApiDataRange(data);
    //         console.log("line 81 ==>>", data);

    //       } else {
    //         console.error('Failed to fetch data');
    //       }
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };

    //   fetchDataRange();
    // }, [startDate, endDate]);



    const handleDateChange = (date) => {
        setNewDate(date);

        const formattedDate = date.toISOString().split('T')[0];
        // console.log("line 56==>>",formattedDate);

        fetch(`http://localhost:3000/getSpecific`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                shopName: "ens241-shubhamsrivastava-store.myshopify.com",
                date: formattedDate,
            }),
        })
            .then(response => response.json())
            .then(data => {
                setApiData(data);
                // console.log("line 117 ==>>", data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    // const lineChartData = {
    //     labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    //     datasets: [
    //       {
    //         label: 'Daily Sales',
    //         fill: false, 
    //         lineTension: 0.1,
    //         backgroundColor: 'rgba(75,192,192,0.4)',
    //         borderColor: 'rgba(75,192,192,1)',
    //         data: [10, 25, 20, 30, 15, 40, 35],
    //       },
    //     ],
    //   };

    return (
        <>

            <Layout>
                <div className='wrap'>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h1>Analytics</h1>
                        <DatePicker
                            showIcon
                            selected={newDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className='wrap2'>
                        <p style={{ fontSize: '20px' }}>Here's how your store is doing</p>
                        <div className='wrap3'>
                            <div className='div1'>
                                <h6>Total verification</h6>
                                <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'green' }}>{apiData ? apiData.data.totalCount : defaultCounts.totalCount}</p>
                            </div>
                            <div className='div2'>
                                <h6>Verified</h6>
                                <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'green' }}>{apiData ? apiData.data.yesCount : defaultCounts.yesCount}</p>
                            </div>
                            <div className='div3'>
                                <h6>Unverified</h6>
                                <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'green' }}>{apiData ? apiData.data.noCount : defaultCounts.noCount}</p>
                            </div>
                        </div>
                    </div>
                    {/ Line Chart /}

                    {/* <div style={{ marginTop: '80px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4 style={{ marginBottom: '35px' }}>Verification status statistics</h4>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>
      <div className='wrap3'>
        <div className='div1'>
          <h6>Total verification</h6>
          <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'green' }}>
            {apiDataRange ? apiDataRange.data.totalCount : defaultCounts2.totalCount}
          </p>
        </div>
        <div className='div2'>
          <h6>Verified</h6>
          <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'green' }}>
            {apiDataRange ? apiDataRange.data.yesCount : defaultCounts2.yesCount}
          </p>
        </div>
        <div className='div3'>
          <h6>Unverified</h6>
          <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'green' }}>
            {apiDataRange ? apiDataRange.data.noCount : defaultCounts2.noCount}
          </p>
        </div>
      </div>
    </div> */}

                </div>
            </Layout>
        </>
    );
}


export default Analytics;