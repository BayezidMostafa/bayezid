"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/lib/schemas/contactSchema";
import Text from "../ui/Text";
import CommonHeader from "../common/CommonHeader/CommonHeader";
import { Button } from "../ui/button";
import { social_links } from "@/lib/constants";
import ContactSVG from "../common/SVG/ContactSVG";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/useAnimation";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: data.userName,
          user_email: data.userEmail,
          message: data.userMessage,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      console.log(result.text);
      toast.success("Thank you! I will get back to you soon!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send the message. Please try again.");
    }
  };

  const pathName = usePathname();

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

  return (
    <div
      id="contact"
      className={`max-w-7xl px-2 mx-auto ${
        pathName !== "/"
          ? "pt-20 min-h-[800px] flex justify-center items-center w-full"
          : "mt-24 mb-20"
      }`}
    >
      <div className={`${pathName !== "/" ? "hidden" : "block"}`}>
        <CommonHeader
          heading="Contact"
          subHeading="I'm really excited to be a part of your project!"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center w-full">
        <div className="w-full lg:w-2/3 mt-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("left", "tween", 0.1, 0.5)}
          >
            <Text variant="heading" className="mb-4">
              Send me a message!
            </Text>
          </motion.div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "tween", 0.1, 0.5)}
              className="flex flex-col gap-1"
            >
              <label htmlFor="userName">Name</label>
              <input
                className="py-2 px-3 rounded-md border-2"
                placeholder="Please provide your name"
                id="userName"
                type="text"
                {...register("userName")}
              />
              {errors.userName && (
                <span className="text-red-500">{errors.userName.message}</span>
              )}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "tween", 0.2, 0.5)}
              className="flex flex-col gap-1"
            >
              <label htmlFor="userEmail">Email</label>
              <input
                className="py-2 px-3 rounded-md border-2"
                placeholder="Please provide your email"
                id="userEmail"
                type="text"
                {...register("userEmail")}
              />
              {errors.userEmail && (
                <span className="text-red-500">{errors.userEmail.message}</span>
              )}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "tween", 0.4, 0.5)}
              className="flex flex-col gap-1"
            >
              <label htmlFor="userMessage">Message</label>
              <textarea
                className="px-3 py-2 rounded-md border-2"
                placeholder="Please provide your message"
                rows={5}
                id="userMessage"
                {...register("userMessage")}
              ></textarea>
              {errors.userMessage && (
                <span className="text-red-500">
                  {errors.userMessage.message}
                </span>
              )}
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "tween", 0.6, 0.5)}
            >
              <Button className="mt-4 w-full" variant="default" type="submit">
                Submit
              </Button>
            </motion.div>
          </form>
        </div>
        <div className="w-full lg:w-1/3 mt-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeIn("right", "tween", 0.2, 0.5)}
          >
            <Text className="text-center" variant="heading">
              Social links
            </Text>
          </motion.div>
          <div>
            {/* SVG Line animation for contact page */}
            <ContactSVG />
          </div>
          <motion.div
            className="flex justify-center flex-wrap gap-3 mt-5"
            initial="hidden"
            whileInView="visible"
            variants={listVariants}
          >
            {social_links?.map((s, i) => {
              const IconComponent = s.Icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                >
                  <a
                    href={s.link}
                    title={s.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tip={s.title}
                  >
                    <Button variant="outline">
                      <IconComponent />
                    </Button>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
