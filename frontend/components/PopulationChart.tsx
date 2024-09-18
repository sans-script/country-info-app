import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  TooltipItem,
} from "chart.js";

type ChartTooltipItemType = TooltipItem<"line">;

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "rgba(255, 255, 255)",
      },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: ChartTooltipItemType) => {
          const value =
            typeof tooltipItem.raw === "number" ? tooltipItem.raw : 0;
          return `Population: ${value.toLocaleString()}`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Year",
        color: "rgba(255, 255, 255)",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
      },
      ticks: {
        color: "rgba(255, 255, 255)",
      },
    },
    y: {
      title: {
        display: true,
        text: "Population",
        color: "rgba(255, 255, 255)",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
      },
      ticks: {
        color: "rgba(255, 255, 255)",
      },
      beginAtZero: true,
    },
  },
};

interface PopulationData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    borderWidth: number;
    fill: boolean;
    pointBackgroundColor: string;
    pointBorderColor: string;
  }[];
}

interface PopulationChartProps {
  data: PopulationData;
}

export const PopulationChart: React.FC<PopulationChartProps> = ({ data }) => (
  <div className="flex flex-col w-full justify-center items-center">
    <Line data={data} options={options} className="max-h-96" />
  </div>
);
