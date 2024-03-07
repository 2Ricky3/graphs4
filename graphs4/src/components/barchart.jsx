import React from 'react'
import Chart from 'chart.js/auto';  
import { Bar } from "react-chartjs-2";

export default function Barchart() {

    var productdata = require("../mock_data/mockdata.json");
    productdata = productdata.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log(productdata);
    const labels = productdata.map((prod) => prod.date);

  return (
  <Bar options={{
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
        text: "Sales Data Baby Lotion",
      },
    },
  }}
  data={{
    labels,
    datasets: [
      {
        label: productdata.map((prod) => prod.date),
        data: productdata.map((prod) => prod.monthly_sales),
        borderColor: "rgba23, 56, 89, 0)",
        backgroundColor: "rgba(23, 56, 89, 0.75)",
      }
    ],
  }}/>
  )
}