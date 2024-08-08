"use client";

import React, { useState } from "react";
import Text from "../ui/Text";
import CommonHeader from "../common/CommonHeader/CommonHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import { DiMongodb, DiNodejs, DiReact } from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaStripe } from "react-icons/fa";
import { ITechDetail, ITechnology } from "@/lib/interface";
import useAnimatedNumber from "@/lib/useAnimatedNumber";
import { fadeIn } from "@/lib/useAnimation";

const technologies: ITechnology[] = [
  {
    img: <DiReact size="3rem" />,
    title: "React.js",
    size: "normal", // Make React icon larger
  },
  {
    img: <SiNextdotjs size="3rem" />,
    title: "Next.js",
    size: "large",
  },
  {
    img: <SiTailwindcss size="3rem" />,
    title: "Tailwind CSS",
    size: "large", // Make Tailwind CSS icon larger
  },
  {
    img: <TbBrandFramerMotion size="3rem" />,
    title: "Framer Motion",
    size: "normal",
  },
  {
    img: <SiJavascript size="3rem" />,
    title: "Javascript",
    size: "large",
  },
  {
    img: <SiTypescript size="3rem" />,
    title: "Typescript",
    size: "large", // Previously added
  },
  {
    img: <DiNodejs size="3rem" />,
    title: "Node.js",
    size: "normal",
  },
  {
    img: <SiExpress size="3rem" />,
    title: "Express.js",
    size: "normal",
  },
  {
    img: <SiFirebase size="3rem" />,
    title: "Firebase",
    size: "large",
  },
  {
    img: <DiMongodb size="3rem" />,
    title: "MongoDB",
    size: "large", // Make MongoDB icon larger
  },
  {
    img: <SiRedux size="3rem" />,
    title: "Redux",
    size: "normal",
  },
  {
    img: <FaStripe size="3rem" />,
    title: "Stripe",
    size: "normal",
  },
];

const techDetails: Record<string, ITechDetail> = {
  "React.js": {
    progress: 90,
    details:
      "Used in numerous projects, proficient in hooks and component lifecycle.",
  },
  "Next.js": {
    progress: 85,
    details: "Built server-side rendered applications, optimized for SEO.",
  },
  "Tailwind CSS": {
    progress: 95,
    details:
      "Utilized for rapid UI development with a focus on responsiveness and customizability.",
  },
  "Framer Motion": {
    progress: 75,
    details:
      "Implemented complex animations and transitions to enhance user experience.",
  },
  Javascript: {
    progress: 90,
    details:
      "Expert in modern JavaScript features and asynchronous programming.",
  },
  Typescript: {
    progress: 75,
    details:
      "Used for type safety in JavaScript, improving code maintainability and robustness.",
  },
  "Node.js": {
    progress: 80,
    details:
      "Experience in building scalable server-side applications with asynchronous programming.",
  },
  "Express.js": {
    progress: 75,
    details:
      "Created RESTful APIs and middleware to handle various web application tasks.",
  },
  Firebase: {
    progress: 70,
    details:
      "Utilized for real-time databases, authentication, and serverless functions.",
  },
  MongoDB: {
    progress: 80,
    details:
      "Experienced in building flexible, scalable databases with rich querying capabilities.",
  },
  Redux: {
    progress: 75,
    details: "Implemented state management solutions for complex applications.",
  },
  Stripe: {
    progress: 70,
    details:
      "Integrated payment processing systems to handle transactions securely.",
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Technologies = () => {
  const [selectedTech, setSelectedTech] = useState(technologies[0]);
  const progressBarWidth = techDetails[selectedTech.title]?.progress || 0;
  const animatedProgress = useAnimatedNumber(progressBarWidth, 800);
  return (
    <div className="container mx-auto">
      <div>
        <CommonHeader
          heading="Technologies"
          subHeading="Technologies that I have been using for quite a long time."
        />
      </div>
      <div className="mt-14 flex flex-col md:flex-row justify-between items-center gap-10">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 md:w-1/2"
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {technologies.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center rounded-lg shadow m-1 p-4 cursor-pointer ${
                item.size === "large"
                  ? "lg:col-span-2 lg:row-span-2"
                  : "lg:col-span-1 lg:row-span-1"
              } bg-secondary`}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 1,
              }}
              onClick={() => setSelectedTech(item)}
            >
              {item.img}
            </motion.div>
          ))}
        </motion.div>
        <div className="md:w-1/2 text-center">
          <motion.div
            key={selectedTech.title} // Change key on selected technology change
            className="flex flex-col items-center gap-2"
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.1, 0.5)}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("down", "tween", 0.3, 0.5)}
            >
              <Text variant="subHeader">{selectedTech.title}</Text>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("down", "tween", 0.1, 0.5)}
            >
              <Text variant="subHeading">
                {techDetails[selectedTech.title]?.details}
              </Text>
            </motion.div>
            {progressBarWidth !== 0 && (
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("up", "tween", 0.1, 0.5)}
                className="h-4 w-4/5 mx-auto rounded-md bg-secondary"
              >
                <motion.div
                  className="bg-primary h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressBarWidth}%` }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            )}
            {progressBarWidth !== 0 ? (
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("up", "tween", 0.3, 0.5)}
              >
                <Text variant="subHeading">Progress: {animatedProgress}%</Text>
              </motion.div>
            ) : (
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("up", "tween", 0.3, 0.5)}
              >
                <Text variant="subHeading">Progress not available</Text>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
