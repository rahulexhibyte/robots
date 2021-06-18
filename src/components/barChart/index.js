import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";
const defaultOptions = {
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

const useStyles = makeStyles((theme) => ({
  barChartMedia: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
}));

const getSampleData = (chartData = {}) => {
  const sampleData = {
    labels: chartData.dates || [],
    datasets: [
      {
        label: "Meters Driven per Day",
        data: chartData.milage || [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 15, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 15, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return sampleData;
};

export default function BarChart({ chartData, chartOptions }) {
  const [data, setData] = useState();
  const [options, setOptions] = useState();
  const classes = useStyles();

  useEffect(() => {
    setData(getSampleData(chartData));
    setOptions(chartOptions || defaultOptions);
  }, []);

  return (
    <Bar data={data} options={options} className={classes.barChartMedia} />
  );
}
