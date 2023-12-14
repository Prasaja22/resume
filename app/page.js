"use client";

import { BsFillMoonStarsFill } from "react-icons/bs";

import { BsFillSunFill } from "react-icons/bs";

import { BsFillArrowDownSquareFill } from "react-icons/bs";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

import Image from "next/image";

import pp from "../public/profil-pic.png";

import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web4.png";

import cer1 from "../public/img_1dcd61ef746006a9a032b4363a6c930c.gif";
import cer2 from "../public/problem_solving_basic certificate_page-0001.jpg";

import { useEffect, useState } from "react";

const portofolioImages = [web1, web2, web3];

const certif = [cer1, cer2];

const cardItems = [
  {
    gambar: design,
    judul: "Design",
    deskripsi:
      "Creating a design and prototype in order to convert the design to a programming language.",
    tools: ["Canva", "Figma"],
  },
  {
    gambar: code,
    judul: "Coding",
    deskripsi:
      "Creating a frontend or full-stack app, I recently used React for the frontend and Laravel for the full stack.",
    tools: ["React.Js", "Laravel", "Tailwind CSS", "GitHub"],
  },
  {
    gambar: consulting,
    judul: "System Design & Testing",
    deskripsi:
      "Creating a design system for an app to ensure everything is working.",
    tools: ["UML", "App Diagram", "Cypress"],
  },
];

export default function Home() {
  const [dark, setDark] = useState(
    localStorage.getItem("darkMode") === "true" // Konversi ke boolean
  );
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDark(savedDarkMode === "true");
    }
  }, []); // Perhatikan penggunaan array dependencies agar useEffect hanya dijalankan sekali saat komponen dimuat

  // Menambahkan useEffect untuk menyimpan perubahan dark mode ke local storage
  useEffect(() => {
    localStorage.setItem("darkMode", dark.toString());
  }, [dark]);

  return (
    <main
      className={`bg-white px-10 md:px-20 lg:px-40 ${
        dark ? "dark:bg-gray-900" : ""
      }`}
    >
      <section className=" min-h-screen text-slate-900">
        <nav className="py-10 mb-12 flex justify-between">
          <h1
            className={`text-xl font-burtonstext-xl font-burtons ${
              dark ? "dark:text-gray-200" : ""
            }`}
          >
            Portofolio Website
          </h1>
          <ul className="flex items-center">
            <li>
              {dark ? (
                <BsFillSunFill
                  className={`cursor-pointer text-2xl animate-pulse ${
                    dark ? "dark:text-gray-200" : ""
                  }`}
                  onClick={(d) => setDark((d) => !dark)}
                />
              ) : (
                <BsFillMoonStarsFill
                  className={`cursor-pointer text-2xl ${
                    dark ? "dark:text-gray-200" : ""
                  }`}
                  onClick={(d) => setDark((d) => !dark)}
                />
              )}
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Ghozy Nouval Satya Prasaja
          </h2>
          <h3
            className={`text-2xl py-2 md:text-3xl ${
              dark ? "dark:text-gray-200" : ""
            }`}
          >
            Junior Web Developer
          </h3>
          <div className="md:px-20 lg:px-40">
            <div
              className="bg-gray-100 cursor-pointer rounded-md text-slate-600 flex justify-between px-5 py-2 md:text-lg items-center"
              onClick={(t) => setToggle((t) => !toggle)}
            >
              <h3 className="font-semibold">About Me</h3>
              <BsFillArrowDownSquareFill />
            </div>
          </div>

          <p
            className={`text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto flex justify-between ${
              toggle ? "" : "hidden"
            } ${dark ? "dark:text-gray-200" : ""} `}
          >
            7th semester student majoring in business information systems from
            the State Polytechnic of Malang Have an interest in the world of
            website development and Android-based application development. Able
            to create web applications using the Laravel framework and Android
            applications using the Flutter framework. Looking for internship
            opportunities in the field of full stack developer, back-end,
            front-end, or android developer to improve skills.
          </p>
        </div>
        <div className="text-3xl flex justify-center gap-16 py-3 text-gray-600 md:text-5xl">
          <a href="https://github.com/Prasaja22" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/ghozyprasaja/" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/nghozy11/" target="_blank">
            <AiFillInstagram />
          </a>
        </div>
        <div className="relative mx-auto max-w-screen-xl bg-gradient-to-b mb-7 from-teal-500 rounded-full w-72 h-72 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image
            src={pp}
            alt="pp"
            priority
            className="object-cover w-full h-full mt-5"
          />
        </div>
      </section>
      <section className="text-slate-900">
        <div>
          <h3 className={`text-3xl py-1 ${dark ? "dark:text-gray-200" : ""}`}>
            Tech Stack
          </h3>
          <p
            className={`text-md py-2 leading-8 text-gray-600 ${
              dark ? "dark:text-gray-200" : ""
            }`}
          >
            In completing various software development projects, I have gained
            extensive experience in using a variety of technologies that
            comprise the <span className="text-teal-500">tech stack</span> I
            employ. For frontend development, I am skilled in using{" "}
            <span className="text-teal-500"> React.js</span>, a JavaScript
            framework that enables the creation of responsive and dynamic user
            interfaces. Additionally, I have expertise in designing layouts
            using CSS and enhancing functionality with JavaScript.
          </p>
          <p
            className={`text-md py-2 leading-8 text-gray-600 ${
              dark ? "dark:text-gray-200" : ""
            }`}
          >
            On the backend side, I have successfully implemented solutions using
            <span className="text-teal-500"> Laravel</span>, a powerful and
            efficient PHP framework. Laravel helps me manage business logic,
            database access, and provides the necessary APIs to support web and
            mobile applications.
          </p>
        </div>
        <div className="lg:flex gap-10">
          {cardItems.map((newCard, i) => (
            <Card
              key={i}
              gambar={newCard.gambar}
              judul={newCard.judul}
              deskripsi={newCard.deskripsi}
              tools={newCard.tools}
              dark={dark}
            />
          ))}
        </div>
      </section>
      <section className="text-slate-900">
        <div>
          <h3 className={`text-3xl py-1 ${dark ? "dark:text-gray-200" : ""}`}>
            Portofolio
          </h3>
          <p
            className={`text-md py-2 leading-8 text-gray-600 ${
              dark ? "dark:text-gray-200" : ""
            }`}
          >
            During my studies at{" "}
            <span className="text-teal-500">Malang State Polytechnic</span>, I
            had the opportunity to be involved in various projects and build a
            number of portfolios that reflect my understanding and skills in the
            world of web and application development. As a Business Information
            Systems student, I focused on software development and information
            technology.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {portofolioImages.map((newPorto, i) => (
            <GalerySections key={i} gambar={newPorto} />
          ))}
        </div>
      </section>
      <section className="text-slate-900">
        <div>
          <h3 className={`text-3xl py-1 ${dark ? "dark:text-gray-200" : ""}`}>
            Certificates
          </h3>
          <p
            className={`text-md py-2 leading-8 text-gray-600 ${
              dark ? "dark:text-gray-200" : ""
            }`}
          >
            During my college years, I earned various certificates that reflect
            my dedication and achievements in various fields. These certificates
            include participation in boot camp training that enriched my
            understanding of certain aspects of the academic world.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {certif.map((cer, i) => (
            <GalerySections key={i} gambar={cer} />
          ))}
        </div>
      </section>
    </main>
  );
}

function GalerySections({ gambar }) {
  return (
    <div className="basis-1/3 flex-1">
      <Image
        src={gambar}
        alt="porto"
        className="rounded-lg object-cover w-full h-full"
      />
    </div>
  );
}

function Card({ gambar, judul, deskripsi, tools, dark }) {
  return (
    <div
      className={`text-center shadow-lg p-10 rounded-xl my-10 ${
        dark ? "dark:text-gray-200 dark:bg-gray-300" : ""
      }`}
    >
      <Image
        src={gambar}
        width={100}
        height={100}
        alt="card"
        className="mx-auto"
      />
      <h3
        className={`text-lg font-medium pt-8 pb-2  ${
          dark ? "dark:text-gray-900" : ""
        }`}
      >
        {judul}
      </h3>
      <p className={`py-2 ${dark ? "dark:text-gray-900" : ""}`}>{deskripsi}</p>
      <h4 className="py-4 text-teal-500">Tools</h4>
      {tools.map((newTools, i) => (
        <p key={i} className="text-gray-800 py-1">
          {newTools}
        </p>
      ))}
    </div>
  );
}
