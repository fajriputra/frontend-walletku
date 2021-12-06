import React, { useState } from "react";
import { formatRp } from "helpers/formatRp";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { ArrowDownSVG, ArrowUpSVG } from "components/SVG";

export default function Statistic({ data }) {
  let labelChart = [];
  data?.listIncome?.map((item) => labelChart.push(item.day));

  let dataChart = [];
  data?.listIncome?.map((item) => dataChart.push(item.total));

  let dataChartExpense = [];
  data?.listExpense?.map((item) => dataChartExpense.push(item.total));

  const dataDashboard = {
    labels: labelChart,
    datasets: [
      {
        label: "# of Income",
        data: dataChart,
        fill: false,
        backgroundColor: "#1EC15F",
        borderColor: "#1EC15F",
        yAxisID: "y-axis-1",
      },
      {
        label: "# of Expense",
        data: dataChartExpense,
        fill: false,
        backgroundColor: "#FF5B37",
        borderColor: "#FF5B37",
        yAxisID: "y-axis-2",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxis: [
        {
          type: "linear",
          display: true,
          position: "left",
          id: "y-axis-1",
          ticks: {
            beginAtZero: true,
          },
        },
        {
          type: "linear",
          display: true,
          position: "right",
          id: "y-axis-2",
          gridLines: {
            drawOnArea: false,
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="dashboard__statistic--card">
      <div className="dashboard__statistic--card--head">
        <div className="dashboard__statistic--card--head--income">
          <ArrowUpSVG stroke="#1EC15F" width="28" height="28" />
          <p className="text__statistic">Income</p>
          <h6 className="text__statistic--amount">
            {formatRp(data.totalIncome)}
          </h6>
        </div>
        <div className="dashboard__statistic--card--head--expense">
          <ArrowDownSVG stroke="#FF5B37" width="28" height="28" />
          <p className="text__statistic">Expense</p>
          <h6 className="text__statistic--amount">
            {formatRp(data.totalExpense)}
          </h6>
        </div>
      </div>

      <Line data={dataDashboard} options={options} />
    </div>
  );
}
