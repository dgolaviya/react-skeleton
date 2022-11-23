import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5"],
  datasets: [
    {
      label: "TY",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "lightgreen",
    },
    {
      label: "LY",
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235)",
    }
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const BarChart = () => (
  <>
    <div className="header">
      <h1 className="title">Grouped Bar Chart</h1>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default BarChart;
