import React from 'react';
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

const data = {
  labels: ['May', 'June'],
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
      text: 'Dotted Line Chart',
    },
  },
};

const Graphe = () => {
  return (
    <div style={{ width: '400px', height: '200px', margin: '0 auto' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graphe;
