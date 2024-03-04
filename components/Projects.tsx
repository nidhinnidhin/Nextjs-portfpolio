import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import project from "../images/project1.png";
import project2 from "../images/project2.png";
import { ProjectDatas } from "./datas";
import Link from "next/link";

type Props = {};

function Projects({}: Props) {
  const ImageWithMotion = motion(Image);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="w-full absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {ProjectDatas.map((data) => {
          return (
            <div
              key={data.id}
              className="w-full flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-3 md:p-2 h-screen"
            >
              <ImageWithMotion src={data.image} alt="" style={{objectFit:"contain",height:"200px",width:"200px"}} />
              <div className="space-y-2 px-2 md:px-10 max-w-7xl mx-auto">
                <h4 className="text-1xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    {data.title}
                  </span>
                </h4>
                {data.live && (
                  <div className="flex">
                    <Link
                      className="text-blue-500 underline decoration-[#F7AB0A]/50 text-start"
                      href={data.live}
                    >
                      <button className="heroButton">Live</button>
                    </Link>
                  </div>
                )}
                {data.admin && (
                  <div className="flex items-center gap-5">
                    <Link
                      className="text-blue-500 underline decoration-[#F7AB0A]/50 text-start"
                      href="http://13.235.209.32/admin/login/?next=/admin/"
                    >
                      <button className="heroButton">Admin</button>
                    </Link>
                    <span>Testing: [admin], [123]</span>
                  </div>
                )}

                {data.technologies_backend != null && (
                  <p className="text-sm md:text-lg xl:text-lg text-start md:text-left xl:text-lg md:text-lg">
                    <span className="font-bold">Backend : </span>
                    {data.technologies_backend}
                  </p>
                )}
                {data.technologies_frontend != null && (
                  <p className="text-sm md:text-lg xl:text-lg text-start md:text-left xl:text-lg md:text-lg">
                    <span className="font-bold">Frontend : </span>
                    {data.technologies_frontend}
                  </p>
                )}
                <p className="text-sm md:text-lg xl:text-lg text-start md:text-left xl:text-lg md:text-lg">
                  {data.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
