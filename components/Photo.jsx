"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
        >
          <div className="w-[298px] h-[298px] xl:w-[420px] xl:h-[420px] mix-blend-lighten absolute">
            <Image
              src="/assets/pandas.png"
              priority
              quality={100}
              fill
              alt=""
              className="object-contain"
            />
          </div>
        </motion.div>
        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[450px] h-[300px] xl:h-[450px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0"}}
            animate={{
                strokeDasharray:["15 120 25 25", "16 25 292 72","4 250 22 22"],
                rotate : [120, 360]
            }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',

            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
