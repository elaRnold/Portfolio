import React from "react";
import { FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import AppBarber from "@/public/AppBarber.png";
import NavesEspaciales from "@/public/NavesEspaciales.png";
import ML4Covid from "@/public/ML4Covid.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Systems Engineering Degree",
    location: "Barranquilla",
    description:
      "I graduated after 5 years of study. I immediately found a job as a Junior FullStack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "FullStack Developer",
    location: "Barranquilla",
    description:
      "I worked as an independent provider in an R&D project at the Universidad del Norte, there I improved my skills in Laravel and web hosting.",
    icon: React.createElement(FaLaravel),
    date: "2023",
  },
  {
    title: "React Full-Stack Developer",
    location: "México",
    description:
      "I worked as a freelance Fullstack developer for Neoseg, during that time I improved my skills in React - Electron.js - Firebase",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "FrontEnd Developer",
    location: "Barranquilla",
    description:
      "I am now a full-time FrontEnd developer working for Infinity Tech. My stack includes React, Next.js, TypeScript, Tailwind, and more.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "App Barber",
    description:
      "Personal project that allows you to schedule and manage services in a barbershop.",
    tags: ["PHP", "MySQL", "SCSS", "Gulp.js", "JS"],
    imageUrl: AppBarber,
  },
  {
    title: "Space Invaders",
    description:
      "2D arcade game made with vanilla JavaScript.",
    tags: ["HTML", "JavaScript"],
    imageUrl: NavesEspaciales,
  },
  {
    title: "ML project for covid cases in Colombia",
    description:
      "Machine Learning model using real data from the first cases of Covid-19 in Colombia.",
    tags: ["ML", "Python", "Jupyter NoteBook"],
    imageUrl: ML4Covid,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MySQL",
  "Redux",
  "Express",
  "Python",
  "PHP",
  "Laravel",
  "Firebase",
  "Azure",
  "Framer Motion",
] as const;
