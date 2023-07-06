import React, { useState, useEffect, useRef } from 'react';
import { Chart, LineController, LinearScale, CategoryScale, PointElement, LineElement, Tooltip } from 'chart.js';

const ETHUSDChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'ETH/USD Price',
        data: [],
        borderColor: 'rgb(39, 220, 139)',
        fill: false,
      },
    ],
  });
  const [timePeriod, setTimePeriod] = useState('7d');

  useEffect(() => {
    Chart.register(LineController, LinearScale, CategoryScale, PointElement, LineElement, Tooltip);

    const chartCtx = chartRef.current.getContext('2d');
    const myChart = new Chart(chartCtx, {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          x: {
            ticks: {
              maxTicksLimit: 10,
              autoSkip: true,
              autoSkipPadding: 10,
              minRotation: 0,
              maxRotation: 0,
            },
          },
          y: {
            position: 'right',
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  useEffect(() => {
    const fetchData = async () => {
      let days = 7;
      if (timePeriod === '30d') {
        days = 30;
      } else if (timePeriod === 'all') {
        days = 'max';
      }
      else if (timePeriod === '1y') {
        days = 365;
      }
      else if (timePeriod === '1d') {
        days = 1;
      }
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=${days}`);
        const data = await response.json();
        const prices = data.prices.map(([timestamp, price]) => ({ x: timestamp, y: price }));
        const labels = data.prices.map(([timestamp]) => {
          const date = new Date(timestamp);
          const formattedDate = date.toLocaleDateString();
          const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          return `${formattedDate} ${formattedTime}`;
        });
        setChartData({ labels, datasets: [{ ...chartData.datasets[0], data: prices }] });
      } catch (error) {
        console.error('Error fetching price data:', error);
      }
    };

    fetchData();
  }, [timePeriod]);

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <div>
        <label>
          <input type="radio" value="1d" checked={timePeriod === '1d'} onChange={handleTimePeriodChange} />
          1D
        </label>
        <label>
          <input type="radio" value="7d" checked={timePeriod === '7d'} onChange={handleTimePeriodChange} />
          7D
        </label>
        <label>
          <input type="radio" value="30d" checked={timePeriod === '30d'} onChange={handleTimePeriodChange} />
          30D
        </label>
        <label>
          <input type="radio" value="1y" checked={timePeriod === '1y'} onChange={handleTimePeriodChange} />
          1Y
        </label>
        <label>
          <input type="radio" value="all" checked={timePeriod === 'all'} onChange={handleTimePeriodChange} />
          All
        </label>
      </div>
      <canvas ref={chartRef} width="800" height="400" />
    </div>
  );
};

export default ETHUSDChart;