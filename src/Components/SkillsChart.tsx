import { Radar } from "react-chartjs-2";
import skillsData from "../Mocks/skillsData";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register radar chart essentials
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const SkillsRadarChart = () => {
  const data = {
    labels: skillsData.map((s) => s.name),
    datasets: [
      {
        label: "Skill Level",
        data: skillsData.map((s) => s.level),
        backgroundColor: "rgba(99,102,241,0.35)",
        borderColor: "rgb(99,102,241)",
        borderWidth: 2,
        pointBackgroundColor: "rgb(99,102,241)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animations: {
      tension: { duration: 1500, easing: "easeOutQuart" },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#fff",
        bodyColor: "#d1d5db",
        borderColor: "#6366f1",
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
        },
        grid: {
          color: "rgba(0,0,0,0.15)",
        },
        angleLines: {
          color: "rgba(0,0,0,0.1)",
        },
        pointLabels: {
          display: true,
          color: "#4b5563",
          padding: 12,
          font: {
            size: 13,
            weight: "600",
          },
        },
      },
    },
  };

  return (
    <div
      className="mx-auto backdrop-blur-lg rounded-2xl shadow-xl"
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "400px",
        maxHeight: "300px",
        border: "1px solid rgba(255,255,255,0.35)",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(245,245,255,0.6))",
        boxShadow: "0px 8px 25px rgba(99,102,241,0.25)",
      }}
    >
      <Radar data={data} options={options as any} />
    </div>
  );
};
