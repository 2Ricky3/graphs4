import React from 'react'
import Chart from 'chart.js/auto';  
import { Line } from "react-chartjs-2";

export default function Linechart() {
    var linedata = require("../mock_data/line.json");
    linedata = linedata.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log(linedata);
    const labels = linedata.map((prod) => prod.date);
  return (
 <Line
 options={{
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {},
      title: {
        display: true,
        text: "Stock Prices Daily Closing",
      },
    },
  }}
  data={{
    labels,
    datasets: [
      {
        label: linedata.map((prod) => prod.date),
        data: linedata.map((prod) => prod.stock_prices),
        borderColor: "rgba23, 56, 89, 0)",
        backgroundColor: "rgba(23, 56, 89, 0.75)",
      }
    ],
  }}/>
  )
}
