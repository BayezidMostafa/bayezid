/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Project } from "@/lib/interface";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Text from "../ui/Text";
import CommonHeader from "../common/CommonHeader/CommonHeader";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/useAnimation";

interface ProjectsListProps {
  projects: Project[];
}

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2, // Adjust the stagger duration as needed
    },
  },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Projects: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="mt-32 pb-5 project-carousel">
      <div className="">
        <CommonHeader
          heading="My Works"
          subHeading="Few projects that I've worked"
        />
      </div>
      <Swiper
        className="mt-14"
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="pb-16">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 container mx-auto">
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeIn("down", "tween", 0.1, 0.5)}
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
                  {project?.images.map((img, i) => (
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
              <div className="w-full">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn("left", "tween", 0, 0.5)}
                >
                  <Text variant="subHeader">{project.projectName}</Text>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn("left", "tween", 0.1, 0.5)}
                >
                  <Text className="mt-2 mb-5">
                    Project Status:{" "}
                    <span className="font-semibold">
                      {project.projectStatus}
                    </span>
                  </Text>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn("left", "tween", 0.2, 0.5)}
                >
                  <a
                    className="border-2 px-4 py-2 bg-secondary rounded-md font-semibold hover:bg-primary-foreground"
                    href={project.liveLink}
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
                    variants={fadeIn("left", "tween", 0.3, 0.5)}
                  >
                    <Text className="mb-2">Technology used:</Text>
                  </motion.div>
                  <motion.ul
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    whileInView="visible"
                    variants={listVariants}
                  >
                    {project.technologies.map((tech, i) => (
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
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
