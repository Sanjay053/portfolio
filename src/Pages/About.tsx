import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Modal, Carousel } from "react-bootstrap";
import { useState } from "react";
import { CameraOutlined, SmileOutlined } from "@ant-design/icons";

import ResumePDF from "../Asset/sanjay_resume.pdf";
import { TIMELINE, TECH_STACK, DOG_IMAGES } from "../Constants/about";

const MotionLink = motion(Link);

const AboutPage = () => {
  const [showDogModal, setShowDogModal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-violet-100 to-indigo-200 px-6 py-10">
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-indigo-700">About Me</h1>
          <p className="mt-4 text-lg text-gray-700">
            Hi! I’m <strong>Sanjay</strong>, a passionate{" "}
            <strong>Frontend Developer</strong> building intuitive & scalable
            web applications using React and Angular.
          </p>
        </motion.div>

        {/* JOURNEY */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <h2 className="text-2xl font-semibold text-indigo-600">My Journey</h2>

          <motion.ul
            className="timeline mt-6 border-l-2 border-indigo-600 pl-6 space-y-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {TIMELINE.map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="relative"
              >
                <span className="absolute -left-[13px] top-1 w-3 h-3 bg-indigo-600 rounded-full"></span>
                <h3 className="font-bold">{item.year}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <h2 className="text-2xl font-semibold text-indigo-600">
            Skills & Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {TECH_STACK.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 bg-white shadow-md p-3 rounded-xl"
              >
                <div className="text-3xl text-indigo-600">{tech.icon}</div>
                <p className="font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* STRENGTHS */}
        <Section
          title="Strengths"
          items={[
            "Pixel-perfect UI development",
            "Reusable & scalable components",
            "Performance optimization",
            "Responsive web development",
          ]}
        />

        {/* WHAT I CARE ABOUT */}
        <Section
          title="What I care about"
          items={[
            "Accessible & user-centered design",
            "Clean, maintainable code",
            "Continuous improvement",
          ]}
        />

        {/* EXPERIENCE SUMMARY */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold text-indigo-600">
            Experience Summary
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            2+ years across enterprise UI systems — promotions, workflow
            automation & e-commerce. Strong in React, Angular, GraphQL, API
            integration & scalable UI architecture.
          </p>
        </div>

        {/* HOBBIES */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold text-indigo-600">Hobbies</h2>
          <ul className="flex gap-6 flex-wrap mt-4 text-gray-700">
            <li className="flex items-center gap-2">
              <CameraOutlined /> Photography
            </li>

            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowDogModal(true)}
            >
              <SmileOutlined /> Dogs
            </li>

            <li>Anime & Tech Trends</li>
          </ul>
        </div>

        {/* RESUME + CONTACT */}
        <div className="max-w-4xl mx-auto mt-12 flex gap-6">
          <motion.a
            href={ResumePDF}
            download
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          >
            Download Resume
          </motion.a>

          <MotionLink
            to="/contact"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-md hover:bg-indigo-100 transition block text-center"
          >
            Contact me
          </MotionLink>
        </div>
      </div>

      {/* DOG MODAL */}
      <Modal
        show={showDogModal}
        onHide={() => setShowDogModal(false)}
        centered
        size="lg"
      >
        <Modal.Body className="p-0">
          <Carousel>
            {DOG_IMAGES.map((img, i) => (
              <Carousel.Item key={i}>
                <img src={img} alt={`Dog ${i + 1}`} className="d-block w-100" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
};

/* REUSABLE SECTION COMPONENT */
const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div className="max-w-4xl mx-auto mt-12">
    <h2 className="text-2xl font-semibold text-indigo-600">{title}</h2>
    <ul className="mt-4 list-disc ml-6 space-y-2 text-gray-700">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

export default AboutPage;
