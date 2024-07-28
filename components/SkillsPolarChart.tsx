import React, { useEffect, useRef } from "react";

import Chart from "chart.js/auto";

import { useTheme } from "@/context/ThemeContextProvider";

export default function SkillsPolarChart() {
  const chartRef = useRef(null) as any;
  const chartInstance = useRef(null) as any;

  const { theme } = useTheme();

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current?.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["Web Development", "UI Design", "Charm & Wit"],
        datasets: [
          {
            label: "Skills",
            data: [55, 30, 15],
            backgroundColor: ["#1f2427", "#6c5cfb", "#e3eaf4"],
            hoverBackgroundColor: ["#1f2427", "#6c5cfb", "#e3eaf4"],
            borderColor: "white",
            hoverBorderColor: "white",
            // spacing: 16,
            borderWidth: 2,
            hoverOffset: 16,
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="mb-6 w-full mx-auto" style={{ width: "100%" }}>
      <canvas id="chart" ref={chartRef}></canvas>
    </div>
    // <div className="mb-6 w-full mx-auto">
    //   <canvas ref={chartRef} style={{ width: "100%", height: "100%" }} />
    // </div>
  );
}
