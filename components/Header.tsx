import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=100074005460414"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/nidhin-b-509135231"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.github.com/nidhinnidhin"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.instagram.com/n_idhi___n/"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.twitter.com/NidhinB6986077"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
