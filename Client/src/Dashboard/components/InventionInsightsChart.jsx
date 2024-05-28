import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const InventionInsightsChart = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    let chartInstance = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      const data = {
        labels: ["Electronic", "Science", "Technology"],
        datasets: [
          {
            label: "Number of Inventions",
            data: [10, 15, 90],
            backgroundColor: "#a310a8",
            borderColor: "#a310a8",
            borderWidth: 1,
          },
        ],
      };
      const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
            precision: 0,
          },
        },
      };

      if (chartInstance) {
        chartInstance.destroy(); // Destroy previous chart instance
      }

      chartInstance = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Clean up the chart instance on component unmount
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default InventionInsightsChart;
