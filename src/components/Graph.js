import React, { Component } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "USD to EUR",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "EUR",
      data: labels.map(() => Math.random() * 100),
      borderColor: "#BB4430",
      backgroundColor: "#EFE6DD",
    },
  ],
};

class Graph extends Component {
  render() {
    console.log(this.props.historyData);
    return (
      <div className="container mx-auto p-10 mt-10 bg-ccGray rounded-lg">
        <Line options={options} data={data} />
      </div>
    );
  }
}

export default Graph;
