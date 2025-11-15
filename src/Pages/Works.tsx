import { Box, VStack, Heading } from "@chakra-ui/react";
import { timelineData } from "../data/timelineData";
import { TimelineItem } from "../Components/TimelineItem";

const WorkPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-violet-100 to-indigo-200 p-6">

      {/* INTRO CARD */}
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md shadow-lg p-8 rounded-2xl mt-12">
        <h2 className="text-2xl font-bold text-indigo-700">
          Hi, I’m Sanjay 👋 — a passionate Frontend Developer
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
          I specialize in building modern, responsive, and user-friendly web
          applications. With strong expertise in React, Angular, and UI design,
          my focus is on creating digital experiences that are clean, scalable,
          and intuitive.
        </p>
      </div>

      {/* TIMELINE SECTION */}
      <Box mt={10} mx="auto" maxW="760px">
        <Heading size="md" mb={5} color="indigo.700">
          My Journey
        </Heading>

        <VStack align="stretch" spacing={4}>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </VStack>
      </Box>

    </div>
  );
};

export default WorkPage;
