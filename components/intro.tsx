"use client";
import Image from "next/image";
import Portfolio from "@/public/Portfolio.jpeg";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Portfolio}
              alt="Arnaldo's Foto"
              width="864"
              height="1101"
              priority={true}
              className="h-60 w-60 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Arnaldo.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack software engineer</span> with{" "}
        <span className="font-bold">over 3 years</span> of experience. I enjoy
        building <span className="italic">sites & applications</span>  using development <span className="font-bold">best practices</span>. My focus is{" "}
        <span className="font-bold">Next.js</span>
        {" and "}
        <span className="font-bold">Nest.js</span> with TypeScript.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="MailTo:Arnaldobenavides.ab@gmail.com"
          className="group bg-black/10 dark:bg-white/10 text-black dark:text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none cursor-pointer borderBlack
        hover:bg-black hover:text-white
        dark:hover:bg-gray-950 dark:hover:text-white"
        >
          <span>Contact me here </span>
          <BsArrowRight className="mt-[2px]" />
        </Link>

        <a
          className="group bg-black/10 dark:bg-white/10 text-black dark:text-white px-7 mx-1 py-3 flex items-center gap-2 rounded-full outline-none cursor-pointer borderBlack
        hover:bg-black hover:text-white
        dark:hover:bg-gray-950 dark:hover:text-white"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="" />
        </a>

        <a
          className="bg-black/10 dark:bg-white/10 hover:bg-black hover:text-white dark:hover:bg-gray-950 dark:hover:text-white p-4 text-black dark:text-white flex items-center gap-2 rounded-full cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/arnaldobr/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-black/10 dark:bg-white/10 hover:bg-black hover:text-white dark:hover:bg-gray-950 dark:hover:text-white p-4 text-black dark:text-white flex items-center gap-2 text-[1.35rem] rounded-full cursor-pointer borderBlack"
          href="https://github.com/elaRnold"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
