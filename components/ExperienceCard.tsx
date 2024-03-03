import React from "react";
import { motion } from "framer-motion";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/reactjs.png";
import python from "../images/python.png";
import typescript from "../images/typescript.png";
import Image from "next/image";
import nextjs from "../images/nextjs.png";
import code from "../images/brototype.webp";

type Props = {};

function ExperienceCard({}: Props) {
  const ImageWithMotion = motion(Image);
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <ImageWithMotion
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        src={code}
        className="w-32 h-32 mt-10 rounded-full xl:w-[100px] xl:h-[100px] object-contain object-center"
        alt=""
      />
      <div className="px-0 md:px-10 pl-20 w-full">
        <h4 className="text-2xl xl:text-4xl flex font-light">
          BOOTCAMP Training
        </h4>
        <p className="font-bold text-2xl xl:text-4xl mt-1">BROCAMP</p>
        <div className="flex space-x-1 md:space-x-2 xl:space-x-2 my-2">
          <Image
            className="rounded-full object-contain"
            src={html}
            height={30}
            width={30}
            alt=""
          />
          <Image
            className="rounded-full object-contain"
            src={css}
            height={30}
            width={30}
            alt=""
          />
          <Image
            className="rounded-full object-contain"
            src={javascript}
            height={30}
            width={30}
            alt=""
          />
          <Image
            className="rounded-full object-contain"
            src={react}
            height={35}
            width={35}
            alt=""
          />
          <Image
            className="mb-2 mr-2 rounded-full object-cover"
            src={typescript}
            height={35}
            width={35}
            alt=""
          />
          <Image
            className="rounded-full object-contain"
            src={nextjs}
            height={35}
            width={35}
            alt=""
          />
          <Image
            className="rounded-full object-contain"
            src={python}
            height={30}
            width={30}
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          28-08-2022... - 17-03-2023...
        </p>
        <ul className="list-disc space-y-2 ml-2 text-sm xl:text-lg md:text-lg">
          <li>Proficient in both Frontend and Backend development.</li>
          <li>
            Skilled in a range of technologies including HTML, CSS, JavaScript,
            ReactJs, NextJs, TypeScript, and Django.
          </li>
          <li>
            Successfully delivered fully responsive E-commerce websites,
            handling both Frontend with React and Backend with Django.
          </li>
          <li>
            Experience with advanced technologies to enhance project
            capabilities.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
