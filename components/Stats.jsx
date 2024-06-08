"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 255,
    text: "Contribution",
  },
  {
    num: 4,
    text: "Projects completed",
  },
  {
    num: 12,
    text: "Technologies Mastered",
  },
  {
    num: 2,
    text: "College Year",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12  xl:pt-8 xl:pb-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center  xl:justify-center"
              >
                <CountUp
                  end={item.num}
                  duration={10}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${item.text.length<21 ? "max-w-[95px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
