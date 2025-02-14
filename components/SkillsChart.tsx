"use client";

import { useEffect } from "react";

import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import { useInView } from "react-intersection-observer";

import { useTheme } from "@/context/ThemeContextProvider";

ChartJS.register(ArcElement, Tooltip);

export default function SkillsChart() {
  const { theme } = useTheme();

  const isLightMode = theme === "light";

  const { ref } = useInView();

  const shadowPlugin = {
    id: "shadowEffect",
    beforeDraw: (chart: any) => {
      const ctx = chart.ctx;
      chart.data.datasets.forEach((dataset: any, datasetIndex: number) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((arc: any) => {
          ctx.save();
          ctx.shadowColor = isLightMode ? "#a2bbdb" : "191c1e";
          ctx.shadowBlur = 0.8 * 16;
          ctx.shadowOffsetX = 0.4 * 16;
          ctx.shadowOffsetY = 0.4 * 16;
          arc.draw(ctx);
          ctx.restore();

          ctx.save();
          ctx.shadowColor = isLightMode ? "#f6f8fb" : "242a2d";
          ctx.shadowBlur = 0.8 * 16;
          ctx.shadowOffsetX = -0.4 * 16;
          ctx.shadowOffsetY = -0.4 * 16;

          arc.draw(ctx);
          ctx.restore();
        });
      });
    },
  };

  useEffect(() => {
    ChartJS.register(shadowPlugin);
  }, [theme]);

  const data = {
    labels: [
      "html & css",
      "typescript",
      "react",
      "ui/ux design",
      "testing & debugging",
      "rest apis",
      "good personality :)",
    ],
    datasets: [
      {
        label: " skill",
        data: [15, 20, 18, 10, 8, 7, 22],
        backgroundColor: isLightMode ? "#e3eaf4" : "#1f2427",
        hoverBackgroundColor: "#6c5cfb",
        borderRadius: 12,
        spacing: 24,
        borderWidth: 0,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 150,
    },
  };

  return (
    <div className="w-full h-96 px-2 mt-8 lg:mt-12 mb-4 lg:mb-8">
      <motion.h3
        ref={ref}
        className="text-xl mb-4 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        skill distribution
      </motion.h3>
      {/* <h3 className="text-xl mb-4 font-medium"></h3> */}

      <Doughnut data={data} options={options} />
    </div>
  );
}
