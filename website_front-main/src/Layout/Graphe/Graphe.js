import React, { useEffect, useState } from 'react';
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
import WarningsContainer from '../../routes/pages/Common/Warnings/WarningsContainer';
import WarningsPresenter from '../../routes/pages/Common/Warnings/WarningsPresenter';

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

const Graphe = () => {
  const[selectMonth, setSelectMonth]= useState(null);
  const navigate = useNavigate();

  const dummy = {
    "positions": [
      {
        "image": ["images/1.png", "images/2.png"],
        "month": 5
      },
      {
        "image": "images/3.png",
        "month": 6
      },
    ]
  };



  const data = {
    labels: ['5', '6'],
    datasets: [
      {
        label: '위험사건 발생 추이',
        data: [2, 1], // 5월: 2, 6월: 1
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
        text: '사건 발생 차트',
      },
    },
    onClick: () => navigate('/datewarnings/1')
    
    
    // onClick: (idx) => {
    //   const find = dummy.positions.map(idx)
    //   console.log(dummy.positions[idx].month)
    // },
  };

  return (
    <div style={{ width: '400px', height: '200px', margin: '0 auto' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graphe;
