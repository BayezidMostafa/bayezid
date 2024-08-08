// app/projects/ProjectsClient.tsx

"use client";

import React from "react";
import Text from "@/components/ui/Text";
import Image from "next/image";
import { Project } from "@/lib/interface";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/useAnimation";

interface ProjectsClientProps {
  projects: Project[];
}

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: {},
};

const ProjectsClient: React.FC<ProjectsClientProps> = ({ projects }) => {
  return (
    <div className="py-20 md:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("left", "tween", 0.2, 0.5)}
      >
        <Text variant="header" className="text-center">
          Projects
        </Text>
      </motion.div>
      <div className="flex flex-col gap-16 pt-16">
        {projects?.map((p, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center justify-center gap-10 container mx-auto`}
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn(isEven ? "right" : "left", "tween", 0.2, 0.5)}
                className="max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[700px] xl:max-w-[900px] shadow-md shadow-black/20 rounded-xl"
              >
                <Swiper
                  className="rounded-xl"
                  spaceBetween={10}
                  slidesPerView={1}
                  loop
                  autoplay={{ delay: 1000, pauseOnMouseEnter: false }}
                  modules={[Pagination, Autoplay]}
                >
                  {p?.images.map((img, i) => (
                    <SwiperSlide key={i} className="rounded-xl">
                      <div className="w-[800px] h-[500px]">
                        <Image
                          priority
                          quality={50}
                          className="rounded-xl object-cover"
                          src={img}
                          layout="fill"
                          alt="Project Image"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn(isEven ? "left" : "right", "tween", 0.2, 0.5)}
                className="w-full"
              >
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(isEven ? "left" : "right", "tween", 0, 0.5)}
                >
                  <Text variant="subHeader">{p.projectName}</Text>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(
                    isEven ? "left" : "right",
                    "tween",
                    0.1,
                    0.5
                  )}
                >
                  <Text className="mt-2 mb-5">
                    Project Status:{" "}
                    <span className="font-semibold">{p.projectStatus}</span>
                  </Text>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn(
                    isEven ? "left" : "right",
                    "tween",
                    0.2,
                    0.5
                  )}
                >
                  <a
                    className="border-2 px-4 py-2 bg-secondary rounded-md font-semibold hover:bg-primary-foreground"
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Site
                  </a>
                </motion.div>
                <div className="mt-5">
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    variants={fadeIn(
                      isEven ? "left" : "right",
                      "tween",
                      0.3,
                      0.5
                    )}
                  >
                    <Text className="mb-2">Technology used:</Text>
                  </motion.div>
                  <motion.ul
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    whileInView="visible"
                    variants={listVariants}
                  >
                    {p.technologies.map((tech, i) => (
                      <motion.li
                        className="px-3 py-1 bg-secondary rounded-md cursor-pointer hover:bg-primary-foreground"
                        key={i}
                        variants={itemVariants}
                        transition={{ duration: 0.4 }} // Adjust the duration as needed
                      >
                        {tech}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsClient;
