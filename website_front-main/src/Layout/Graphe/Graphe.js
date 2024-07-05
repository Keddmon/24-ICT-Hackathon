import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';

// Chart.js의 필요한 구성 요소를 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graphe = ({
  title,
  text,
  labels,
  datas,
}) => {
  const navigate = useNavigate();

  const data = {
    labels: labels, // ['5', '6']
    datasets: [
      {
        label: title,
        data: datas, // 5월: 2, 6월: 1 [2, 1]
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderDash: [5, 5], // 점선 설정
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: text,
      },
    },
    onClick: () => navigate('/datewarnings/1')
  };

  return (
    <div style={{ width: '500px', height: '300px', margin: '0 auto' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graphe;