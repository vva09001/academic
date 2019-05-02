import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const ClassChart = ({ title, total, total1, total2, total3, total4, name1, name2, name3, name4 }) => {
  const [state] = useState({
    charData: {
      labels: title,
      datasets: [
        {
          label: "Tổng số",
          data: [total],
          backgroundColor: ["#203e7d", "#203e7d"]
        },
        {
          label: name1,
          data: [total1],
          backgroundColor: ["steelblue", "steelblue"]
        },
        {
          label: name2,
          data: [total2],
          backgroundColor: ["skyblue", "skyblue"]
        },
        {
          label: name3,
          data: [total3],
          backgroundColor: ["powderblue", "powderblue"]
        },
        {
          label: name4,
          data: [total4],
          backgroundColor: ["powderblue", "powderblue"]
        },

      ]
    }
  });
  return (
    <div className="chart">
      <Bar
        data={state.charData}
        options={
          {
            // maintainAspectRatio: false
          }
        }
      />
    </div>
  );
};

export default ClassChart;
