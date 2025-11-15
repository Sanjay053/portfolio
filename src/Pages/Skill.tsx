import { motion } from "framer-motion";
import { useState } from "react";
import skillsData from "../Mocks/skillsData";
import { SkillsRadarChart } from "../Components/SkillsChart";

const SkillsPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Common card styles
  const cardBaseStyles =
    "min-h-[200px] rounded-xl flex flex-col items-center justify-center";
  const cardFrontStyles =
    "bg-white shadow-lg p-6 border border-indigo-200 text-center hover:shadow-xl transition-shadow";
  const cardBackStyles =
    "absolute inset-0 bg-indigo-700 text-white text-center p-4";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-200 p-6">
      {/* TITLE */}
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h1>

      {/* RADAR CHART */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-10 flex flex-col items-center gap-10"
      >
        <SkillsRadarChart />
      </motion.div>

      {/* SKILL CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {skillsData.map((skill, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className="perspective cursor-pointer"
              onClick={() => handleCardClick(index)}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: isActive ? 180 : 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* FRONT SIDE */}
                <div
                  className={`${cardBaseStyles} ${cardFrontStyles}`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-4xl text-indigo-600 mb-3">
                    {skill.icon}
                  </div>
                  <p className="text-xl font-semibold text-indigo-700">
                    {skill.name}
                  </p>
                  <p className="text-gray-600 mt-2">Level: {skill.level}%</p>
                </div>

                {/* BACK SIDE */}
                <div
                  className={`${cardBaseStyles} ${cardBackStyles}`}
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <p className="text-xl font-bold mb-2">{skill.name}</p>
                  <p className="text-sm px-3 leading-snug mb-2">
                    {skill.description}
                  </p>

                  <p className="text-sm text-indigo-200">
                    Experience: {skill.exp}
                  </p>

                  {skill.tools && (
                    <p className="text-xs mt-2 text-indigo-200 px-2">
                      Tools: {skill.tools.join(", ")}
                    </p>
                  )}

                  {skill.project && (
                    <p className="text-xs mt-2 text-yellow-300 px-2">
                      Project: {skill.project}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
