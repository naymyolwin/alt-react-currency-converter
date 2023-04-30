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

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "USD to EUR",
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "EUR",
//       data: labels.map(() => Math.random() * 100),
//       borderColor: "#BB4430",
//       backgroundColor: "#EFE6DD",
//     },
//   ],
// };

const getGraphData = (currencyObj) => {
  const data = {};
  data.labels = [];
  data.rates = [];
  data.data = [];
  data.label = currencyObj.toCurrency;
  data.text = `${currencyObj.fromCurrency} to ${currencyObj.toCurrency}`;
  data.ratesObj = currencyObj.historyData.rates;

  for (const key in data.ratesObj) {
    data.labels.push(key);
    data.data.push(data.ratesObj[key][data.label]);
  }

  data.options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: data.text,
      },
    },
  };

  const labels = data.labels;

  data.graphData = {
    labels,
    datasets: [
      {
        label: data.label,
        data: data.data,
        borderColor: "#BB4430",
        backgroundColor: "#EFE6DD",
      },
    ],
  };

  return data;
};

class Graph extends Component {
  render() {
    const data = getGraphData(this.props);
    return (
      <div className="container mx-auto p-10 mt-10 bg-ccGray rounded-lg">
        <Line options={data.options} data={data.graphData} />
      </div>
    );
  }
}

export default Graph;
