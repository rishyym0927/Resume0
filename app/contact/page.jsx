"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarker } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 9876543210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "  ",
  },
  {
    icon: <FaMapMarker />,
    title: "Address",
    description: " Code Corner , Tech Town 12011 ",
  },
];

import { motion } from "framer-motion";

import React from "react";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.8,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-[#22ff99] ">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium officia nemo totam aliquam 
                
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="Lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
                {/* select */}
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />

                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Select a service</SelectLabel>
                            <SelectItem value="est">Web Development</SelectItem>
                            <SelectItem value="cst">UI UX Design</SelectItem>
                            <SelectItem value="cst">App Development</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Textarea className="h-[200px]" placeholder="Type your message here" />

                <button className="w-48 border-black border  rounded-lg py-3 bg-[#22ff99] text-[#1C1C22] text-base font-bold">
                    Send Message
                </button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
                {info.map((item, index)=>{
                    return <li key={index} className="flex items-center gap-6">
                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#22ff99] rounded-md flex items-center justify-center" >
                            <div className="text-[28px]">{item.icon}</div>
                        </div>
                        <div>
                           <p className="text-white/60">{item.title}</p>
                           <h3 className="text-xl">{item.description}</h3>
                        </div>
                    </li>
                })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
