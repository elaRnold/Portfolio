"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg">
        After earning my bachelor's degree in <span className="font-medium">computer science</span>, 
        I decided to expand my passion for programming by working as a freelancer while learning various
        frameworks and technologies. I enrolled in various programming courses
        at Udemy and the Colombian ICT Ministry, where I learned complete{" "}
        <span className="font-medium">web/mobile development</span>. One of my greatest achievements was working for
        the University of the North (Barranquilla) on an R&D project about Covid
        19 in older adults, there I was able to develop a toolkit to support
        health professionals to determine if a patient had chances of
        contracting this condition. 
        </p>

        <p className="mb-3 text-lg">
        My favorite part of programming is the
        problem solving aspect. I <span className="underline">love</span> the feeling of finally finding a solution
        to a problem. My main stack is <span className="font-medium">Next.js, Nest.js, Laravel, and Node</span>. I&apos;m
        also familiar with TypeScript and Microsoft Azure. I am always looking
        to learn new technologies.
      </p>

      <p className="text-lg">
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games 🎮, watching movies 🎬, and playing with my dog 🐶. I also enjoy learning
        new recipes 🍝🍽️.
      </p>
    </motion.section>
  );
}
