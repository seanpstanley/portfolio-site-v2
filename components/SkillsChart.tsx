// import React, { useEffect, useRef } from "react";

// import Chart from "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import type { ChartData, ChartOptions } from "chart.js";

import { useTheme } from "@/context/ThemeContextProvider";

export default function SkillsPolarChart() {
  // const chartRef = useRef(null) as any;
  // const chartInstance = useRef(null) as any;

  const { theme } = useTheme();

  // useEffect(() => {
  //   if (chartInstance.current) {
  //     chartInstance.current.destroy();
  //   }

  //   const myChartRef = chartRef.current?.getContext("2d");

  //   chartInstance.current = new Chart(myChartRef, {
  //     type: "doughnut",
  // options: {
  //   maintainAspectRatio: false,
  //   cutout: 80,
  // },
  // data: {
  //   labels: ["Web Development", "UI Design", "Charm & Wit"],
  //   datasets: [
  //     {
  //       label: "Skill",
  //       data: [55, 30, 15],
  //       backgroundColor: ["#1f2427", "#6c5cfb", "#e3eaf4"],
  //       hoverBackgroundColor: ["#1f2427", "#6c5cfb", "#e3eaf4"],
  //       borderColor: theme === "light" ? "#e3eaf4 " : "#1f2427",
  //       hoverBorderColor: theme === "light" ? "#e3eaf4 " : "#1f2427",
  //       borderRadius: 100,
  //       // spacing: 16,
  //       borderWidth: 4,
  //       hoverOffset: 16,
  //     },
  //   ],
  // },
  //   });
  //   return () => {
  //     if (chartInstance.current) {
  //       chartInstance.current.destroy();
  //     }
  //   };
  // }, []);

  ChartJS.register(ArcElement, Tooltip, Legend, Title);

  const data = {
    labels: ["Web Development", "UI Design", "Charm & Wit"],
    datasets: [
      {
        label: "Skill",
        data: [55, 30, 15],
        backgroundColor: [
          "rgba(0,0,0,0.75)",
          "#6c5cfb",
          "rgba(255,255,255,0.75)",
        ],
        hoverBackgroundColor: [
          "rgba(0,0,0,0.75)",
          "#6c5cfb",
          "rgba(255,255,255,0.75)",
        ],
        borderColor: theme === "light" ? "#e3eaf4 " : "#1f2427",
        hoverBorderColor: theme === "light" ? "#e3eaf4 " : "#1f2427",
        borderRadius: 100,
        spacing: 8,
        borderWidth: 0,
        hoverOffset: 16,
      },
    ],
  };

  // const ShadowPlugin = {
  //   beforeDraw: (chart: any) => {
  //     const { ctx } = chart;
  //     ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  //     ctx.shadowBlur = 10;
  //     ctx.shadowOffsetX = 5;
  //     ctx.shadowOffsetY = 5;
  //   },
  // };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: 99,
  };

  const plugins = [
    {
      beforeDraw: function (chart: any) {
        const { ctx } = chart;
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
      },
    },
  ];

  const myPlugin = {
    id: "customShadow",
    beforeDraw: (chart: any) => {
      const ctx = chart.ctx;
      ctx.save();

      const originalLineDraw = ctx.stroke;
      ctx.stroke = function () {
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        originalLineDraw.apply(this, arguments);
        ctx.restore();
      };
    },
  };

  return (
    <div className="w-full border border-black mb-8 m-auto">
      <div className="rounded-lg w-full h-auto px-6 py-4 relative">
        <Doughnut
          id="doughnutChart"
          data={data}
          options={options}
          // plugins={[myPlugin] as any}
        />
      </div>
    </div>
  );
}
