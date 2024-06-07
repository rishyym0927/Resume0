"use client";

import React from "react";
import { BsArrowDown } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: "01",
    title: "Web Development",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquid voluptates impedit harum sit dolores placeat optio. Temporibus dolorum quasi quas dolores quae rerum deserunt provident, nemo mollitia nostrum atque?",
      href:""
  },
  {
    num: "02",
    title: "Golang Development",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquid voluptates impedit harum sit dolores placeat optio. Temporibus dolorum quasi quas dolores quae rerum deserunt provident, nemo mollitia nostrum atque?",
      href:""
  },
  {
    num: "03",
    title: "Competitive Programming",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquid voluptates impedit harum sit dolores placeat optio. Temporibus dolorum quasi quas dolores quae rerum deserunt provident, nemo mollitia nostrum atque?",
      href:""
  },
  {
    num: "04",
    title: "Blockchain",
    Description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem aliquid voluptates impedit harum sit dolores placeat optio. Temporibus dolorum quasi quas dolores quae rerum deserunt provident, nemo mollitia nostrum atque?",
      href:""
  },
];

import { animate, motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
        <div className="container mx-auto">
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{
            delay:2.4,
            duration:0.8,
            ease:"easeIn"
        }}} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {services.map((service, index)=>{
                return <div key={index} className="flex flex-1 flex-col justify-center gap-4 group">
                    <div className="w-full flex justify-between items-center">
                        <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500 text-transparent ">{service.num}</div>
                        <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white  group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                        <BsArrowDown className="text-black text-3xl"/>
                        </Link>
                    </div>
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 ">{service.title}</h2>
                    <p className="text-white/60"> {service.Description}</p>
                    <div className="border-b border-white/80 w-full ">

                    </div>
                </div>
            })}
        </motion.div>
        </div>
    </section>
  );
};

export default Services;
