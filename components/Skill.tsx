import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SkillDatas } from "./datas";

type Props = {};

function Skill({}: Props) {
  const ImageWithMotion = motion(Image);
  return (
    <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-4 xl:gap-5 md:gap-3 gap-5">
      {SkillDatas.map((data) => {
        return (
          <div key={data.id} className="group relative flex cursor-pointer">
            <ImageWithMotion
              initial={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              src={data.image}
              alt=""
              height={100}
              width={100}
              className="rounded-full object-cover w-20 h-20 xl:w-24 xl:h-24 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-24 xl:h-24 rounded-full z-0">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm text-1xl  text-black opacity-100">{data.percentage}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skill;
