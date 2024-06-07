import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full ">
        <div className="flex flex-col  xl:flex-row items-center justify-between xl:pt-2 xl:pb-4">
          {/* {Text} */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl ">Software Developer </span>
            <h1 className="h1">
              {" "}
              Hello I'm <br />{" "}
              <span className="text-red-200">Luke Coleman</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">
              I excel at crafting elegant digital experience and I am proficient
              in various programming language and technologies
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <button className="flex flex-row border w-48 p-2 text-md items-center justify-center gap-4 border-white/50 rounded">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full  flex justify-center items-center text-red-300 text-base hover:transition-all duration-500]"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-7 xl:mb-7">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
