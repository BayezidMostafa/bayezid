"use client";
import React from "react";
import Text from "../ui/Text";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, GitHub, LinkedIn, Twitter } from "../common/icons";
import { ILink } from "@/lib/interface";
import { Button } from "../ui/button";
import CommonHeader from "../common/CommonHeader/CommonHeader";
import { usePathname } from "next/navigation";
import { fadeIn, slideIn, zoomIn } from "@/lib/useAnimation";

const About = () => {
  const pathName = usePathname();

  return (
    <div className="py-10" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`${pathName !== "/" ? "hidden" : "block"}`}>
          <CommonHeader
            heading="About"
            subHeading="A brief discussion about me"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.1, 0.5)}
            className="md:w-1/2"
          >
            <Image
              priority
              className="rounded-full"
              src="/final.png"
              height={700}
              width={800}
              alt="profile-image"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", "tween", 0.1, 0.5)}
            className="md:w-1/2 text-center md:text-start"
          >
            <Text variant="subHeading" className="">
              Hello! I&apos;m a passionate Front-end Developer dedicated to
              crafting dynamic and responsive user experiences. With a keen eye
              for design and detail, I specialize in utilizing modern front-end
              technologies to bring creative visions to life.
            </Text>
            <Text variant="subHeading" className=" mt-4">
              My approach to front-end development is centered on creating
              seamless, accessible, and visually appealing digital experiences.
              I&apos;m constantly exploring new technologies and methodologies
              to stay at the forefront of the industry and deliver exceptional
              results. Let&apos;s build something amazing together!
            </Text>
            <div className="mt-10">
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-10">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn("up", "tween", 0.1, 0.5)}
                >
                  <Button size="lg" variant="destructive">
                    Download Resume
                  </Button>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn("up", "tween", 0.3, 0.5)}
                >
                  <Button size="lg" variant="destructive">
                    Download CV
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
