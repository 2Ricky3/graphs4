import React from 'react'
import Chart from 'chart.js/auto';  
import { Doughnut, Pie } from "react-chartjs-2";

export default function Piechart() {
    var piedata = require("../mock_data/chartdata.json")
    var labels = piedata.map((item => item.from_source));
    var coloR = [];
    var dynamicColors = function() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
     };

     for (var i in piedata) {
        coloR.push(dynamicColors());
     }
  return (
    <Pie options={{
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
            text: "Visits",
          },
        },
      }}
      data={{
        labels,
        datasets: [
          {
            label: piedata.map((visited) => visited.from_source),
            data: piedata.map((visited) => visited.user_visited),
            borderColor: "rgba23, 56, 89, 0)",
            backgroundColor: coloR ,
          }
        ],
      }}/>
  )
}
