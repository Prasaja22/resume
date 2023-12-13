"use client";

import { BsBrowserChrome } from "react-icons/bs";

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
import { useState } from "react";

const portofolioImages = [web1, web2, web3];

const cardItems = [
  {
    gambar: design,
    judul: "Design Bagus",
    deskripsi: "Creating Elegant Design suited for needs design theory",
    tools: ["canva", "figma"],
  },
  {
    gambar: code,
    judul: "Code Bagus",
    deskripsi: "Creating Elegant Code suited for needs code theory",
    tools: ["react", "laravel"],
  },
  {
    gambar: consulting,
    judul: "Consulting Bagus",
    deskripsi: "Creating Consulting Design suited for needs design theory",
    tools: ["consulting", "apacoba"],
  },
];

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <main className="bg-white px-10 md:px-20 lg:px-40 ">
      <section className=" min-h-screen text-slate-900">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Portofolio Website</h1>
          <ul className="flex items-center">
            <li>
              <BsBrowserChrome className="cursor-pointer text-2xl" />
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
          <h3 className="text-2xl py-2 md:text-3xl">Junior Web Developer</h3>
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
            }`}
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
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillInstagram />
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
          <h3 className="text-3xl py-1">Services Offer</h3>
          <p className="text-md py-2 leading-8 text-gray-600">
            I gave services such as fullstack using{" "}
            <span className="text-teal-500">laravel</span> and frontend using
            <span className="text-teal-500"> react</span>
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
            />
          ))}
        </div>
      </section>
      <section className="text-slate-900">
        <div>
          <h3 className="text-3xl py-1">Portofolio</h3>
          <p className="text-md py-2 leading-8 text-gray-600">
            I gave services such as fullstack using{" "}
            <span className="text-teal-500">laravel</span> and frontend using
            <span className="text-teal-500"> react</span>
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {portofolioImages.map((newPorto, i) => (
            <PortofolioImagesCard key={i} gambar={newPorto} />
          ))}
        </div>
      </section>
    </main>
  );
}

function PortofolioImagesCard({ gambar }) {
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

function Card({ gambar, judul, deskripsi, tools }) {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10">
      <Image
        src={gambar}
        width={100}
        height={100}
        alt="card"
        className="mx-auto"
      />
      <h3 className="text-lg font-medium pt-8 pb-2">{judul}</h3>
      <p className="py-2">{deskripsi}</p>
      <h4 className="py-4 text-teal-500">Design Tools</h4>
      {tools.map((newTools, i) => (
        <p key={i} className="text-gray-800 py-1">
          {newTools}
        </p>
      ))}
    </div>
  );
}
