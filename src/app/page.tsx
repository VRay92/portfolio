"use client";
import Image from "next/image";
import { RiComputerLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { SiCircleci } from "react-icons/si";
import { IoMapOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import Card2 from "./component/Card2";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { Link } from "react-scroll";
import Card3 from "./component/Card3";
import Animation from "./component/Animation";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [data2, setData2] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };

  useEffect(() => {
    setInterval(() => setLoading(false), 1500);
  }, []);
  console.log(data);
  console.log(data2);

  return (
    <main className="  bg-[#282828]">
      <nav
        id="navbar"
        className="fixed z-50 flex justify-between bg-[#454545] items-center h-[100px] w-full shadow-lg top-0  px-0 py-[3rem] md:px-[8rem]"
      >
        <img id="logo" alt="logo" src="logo.png" className="md:mx-0 ml-2" />
        <RxHamburgerMenu
          size={40}
          onClick={() => setOpenMenu(!openMenu)}
          className="text-white cursor-pointer md:hidden absolute right-0 mr-4"
        />
        <ul className="text-white md:flex hidden gap-[4rem]">
          <li className="relative">
            <a href="#" className="relative group" onClick={backToTop}>
              HOME
              <div className="absolute -bottom-3 left-0 w-0 h-[4px] bg-rainbow-gradient transition-all duration-300 group-hover:w-full"></div>
            </a>
          </li>
          <li className="relative">
            <a href="#description1" className="relative group">
              SKILLS
              <div className="absolute -bottom-3 left-0 w-0 h-[4px] bg-rainbow-gradient transition-all duration-300 group-hover:w-full"></div>
            </a>
          </li>
          <li className="relative">
            <a href="#description2" className="relative group">
              PORTFOLIO
              <div className="absolute -bottom-3 left-0 w-0 h-[4px] bg-rainbow-gradient transition-all duration-300 group-hover:w-full"></div>
            </a>
          </li>
          <li className="relative">
            <a href="#description3" className="relative group">
              RESUME
              <div className="absolute -bottom-3 left-0 w-0 h-[4px] bg-rainbow-gradient transition-all duration-300 group-hover:w-full"></div>
            </a>
          </li>
          <li className="relative">
            <a href="#description4" className="relative group">
              CONTACT
              <div className="absolute -bottom-3 left-0 w-0 h-[3px] bg-rainbow-gradient transition-all duration-300 group-hover:w-[85px]"></div>
            </a>
          </li>
        </ul>
        <a href="https://wa.me/+6282141657805">
          <button className="text-white button bg-[#f40841] rounded-3xl w-[8rem] h-[2.5rem] md:block hidden">
            {`Let's Talk`}
          </button>
        </a>

        {openMenu && (
          <>
            <div className="w-full  text-white text-center absolute top-[96px] z-[20] left-0 md:hidden">
              <div className="flex flex-col align-middle">
                <a
                  href="#"
                  onClick={() => setOpenMenu(false)}
                  className="w-full border-[#242424] bg-black py-4 border-b active:translate-y-1 hover:bg-white hover:text-black"
                >
                  HOME
                </a>
                <a
                  href="#description1"
                  onClick={() => setOpenMenu(false)}
                  className="w-full border-[#242424] bg-black py-4 border-b active:translate-y-1 hover:bg-white hover:text-black"
                >
                  SKILLS
                </a>
                <a
                  href="#description2"
                  onClick={() => setOpenMenu(false)}
                  className="w-full border-[#242424] bg-black py-4 border-b active:translate-y-1 hover:bg-white hover:text-black"
                >
                  PORTFOLIO
                </a>
                <a
                  href="#description3"
                  onClick={() => setOpenMenu(false)}
                  className="w-full border-[#242424] bg-black py-4 border-b active:translate-y-1 hover:bg-white hover:text-black"
                >
                  RESUME
                </a>
                <a
                  href="#description5"
                  onClick={() => setOpenMenu(false)}
                  className="border-[#242424] bg-black py-4 border-b w-full active:translate-y-1 hover:bg-white hover:text-black"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
      {openMenu && (
        <div className="fixed md:hidden left-0 top-0 z-[10] h-full w-full bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter"></div>
      )}
      {loading && (
        <div className="fixed left-0 top-0 z-[99] h-screen w-screen bg-[#282828] backdrop-filter flex justify-center items-center text-center">
          <div className="h-[400px] w-[400px]">
            <Animation />
          </div>
        </div>
      )}
      <section
        id="hero-section"
        className="flex md:flex-row flex-col md:justify-between px-4 md:px-[8rem] pt-[13rem] md:pt-[15rem] md:pb-[8rem]"
      >
        <div id="left-container" className=" md:w-1/2 w-full">
          <div id="introduction" className="text-white ">
            <h2 className="text-xl text-center md:text-left">
              Hello, <span className="text-[rgb(244,8,65)]">{`I'm`}</span>
            </h2>
            <strong className="font-extrabold text-5xl md:text-7xl flex justify-center md:justify-start">
              Adrian Irawan
            </strong>
            <h2 className="text-lg text-center md:text-left">
              Web Developer and Graphic Designer
            </h2>
            <p className="md:text-lg pb-[50px] md:mx-0  md:mt-0 mt-10 text-justify md:text-left">
              a passionate individual currently immersed in the dynamic world of
              web development. As an aspiring Full Stack Web Developer and
              Graphic Designer, I am constantly exploring the vast realm of
              digital creativity, with a focus on Front-End Development. This
              aligns with the rapidly increasing demand for digital jobs in the
              market. I primarily utilized JavaScript as my programming
              language, in conjunction with other libraries and frameworks
              including React JS, Next JS, TypeScript, and Node JS.
            </p>
            <h4 className="text-lg text-center md:text-left">FIND ME ON</h4>
          </div>
          <div
            id="social-media-icon"
            className="flex justify-center gap-3 md:justify-between md:w-[250px] mb-20 md:mb-0 "
          >
            <a
              className="size-[50px] active:translate-y-1"
              href="https://www.linkedin.com/in/adrian-irawan92/"
            >
              <img
                width={50}
                height={50}
                src="linkedin.jpg"
                alt="linkedin Icon"
              />
            </a>
            <a
              className="size-[50px] active:translate-y-1"
              href="https://github.com/VRay92?tab=repositories"
            >
              <img width={50} height={50} src="github.jpg" alt="github Icon" />
            </a>
            <a
              className="size-[50px] active:translate-y-1"
              href="https://wa.me/+6282141657805"
            >
              <img
                width={50}
                height={50}
                src="whatsapp.jpg"
                alt="Whatsapp Icon"
              />
            </a>

            <a
              className="size-[50px] active:translate-y-1"
              href="https://www.facebook.com/adrian.irawan.37/"
            >
              <img
                width={50}
                height={50}
                src="facebook.jpg"
                alt="facebook Icon"
              />
            </a>
          </div>
        </div>
        <div
          id="right-container"
          className="relative flex justify-center items-center w-full h-[350px] md:h-[500px] md:w-1/2 "
        >
          <img
            className="md:w-[90%] absolute md:top-0 right-0 opacity-80"
            alt="abstract"
            src="abstract.png"
          />
          <img
            className="h-[400px] w-auto md:h-[600px] absolute top-0 md:-bottom-28"
            src="profile.png"
            alt="profile"
          />
        </div>
      </section>

      <a id="return-icon" href="#" onClick={backToTop}>
        <img id="arrow" alt="chevron" src="thin-chevron-arrow-top-icon.png" />
      </a>
      <div className="hr my-[8rem] mx-4 md:m-[8rem]"></div>

      {/* My Skills */}

      <div id="description1" className="px-4  md:pl-[8rem]">
        <h4 className="text-[rgb(244,8,65)]">MY SKILLS</h4>
        <p>
          <strong className="text-white text-5xl">Proficiencies</strong>
        </p>
      </div>
      <section
        id=""
        className="mx-4 md:grid md:grid-cols-3 md:auto-rows-auto md:gap-8 text-justify md:mx-[8rem]"
      >
        <div className="card1">
          <span className=" ">
            <img src="react.png" alt="react" className="w-auto h-[70px]" />
          </span>
          <h3 className="text-white text-4xl font-bold mt-8">React</h3>
          <p className="text-white">
            One of the most used library for web development. The advantage of
            using React lies in the ability to create VDOM and then manipulating
            them with JavaScript XML . And the ability to expand to other
            platforms to build high quality UI.
          </p>
        </div>
        <div className="card1">
          <span className=" ">
            <img
              src="Typescript.png"
              alt="typescript"
              className="w-auto h-[70px]"
            />
          </span>
          <h3 className="text-white text-4xl font-bold mt-8">TypeScript</h3>
          <p className="text-white">
            TypeScript enhances JavaScript with static typing, catching errors
            early and improving code robustness. Its advanced tooling and clear
            type annotations boost developer productivity and aid team
            collaboration, leading to safer, more maintainable codebases.
          </p>
        </div>
        <div className="card1">
          <span className=" ">
            <img src="next.webp" alt="next" className="w-auto h-[50px]" />
          </span>
          <h3 className="text-white text-4xl font-bold mt-12">Next JS</h3>
          <p className="text-white">
            Next.js simplifies React web development with features like
            automatic code splitting and server-side rendering, improving
            performance and developer productivity. Its built-in routing and API
            support enable rapid development of modern, SEO-friendly web
            applications.
          </p>
        </div>
        <div className="card1">
          <span className=" ">
            <img src="vite.png" alt="vite" className="w-auto h-[70px]" />
          </span>
          <h3 className="text-white text-4xl font-bold mt-8">Vite</h3>
          <p className="text-white">
            Vite revolutionizes web development with blazing-fast build times
            and instant hot module replacement, boosting developer efficiency.
            Its innovative development server and native ES module support
            streamline modern JavaScript development, enabling rapid iteration
            and enhancing overall project performance.
          </p>
        </div>
        <div className="card1">
          <span className=" ">
            <img src="nodejs.png" alt="vite" className="w-auto h-[70px]" />
          </span>
          <h3 className="text-white text-4xl font-bold mt-8">Node JS</h3>
          <p className="text-white">
            Node.js revolutionizes server-side JavaScript with its scalable,
            event-driven architecture, ideal for real-time applications. Its
            vast ecosystem and non-blocking I/O model ensure high performance,
            empowering developers to build robust and flexible backend
            solutions.
          </p>
        </div>
        <div className="card1">
          <span className=" ">
            <img src="express.png" alt="vite" className="w-auto h-[70px]" />
          </span>
          <h3 className="text-white text-4xl font-bold mt-8">Express JS</h3>
          <p className="text-white">
            Express.js streamlines web development with its minimalist yet
            powerful framework, offering rapid server-side application building.
            Its modular design and middleware support enable efficient
            development and scalability,a top choice for creating robust web
            servers and APIs.
          </p>
        </div>
      </section>
      <h1 className="text-white mx-4 md:mx-[8rem] mb-[8rem] md:mb-[12rem] text-xl mt-10">
        Other skills:{" "}
        <b>
          MySQL,ORM Prisma, Figma, Adobe Photoshop, Adobe Illustrator, CorelDraw
        </b>{" "}
      </h1>
      <div id="hr1" className="hr mx-4 md:mx-[8rem]"></div>

      {/* Portfolio */}

      <div id="description2">
        <h4 className="text-[rgb(244,8,65)]">PROJECTS</h4>
        <p className="text-white">
          <strong className="text-white text-7xl">Portfolio</strong>
        </p>
      </div>
      <div className="container mx-auto p-4 mb-[8rem] mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-8 text-justify">
          <Card3
            imageUrl="company-profile.png"
            title="PT. Jawa Agrindo Internasional"
            projectUrl="https://company-profile-jawa-agrindo.vercel.app/"
          >
            A company profile website for an Agricultural Company in East Java.
            This project is created by using Next JS, Typescript, Tailwind as
            framework. In this project, API call is used to generate dummy data
            for team member.
          </Card3>
          <Card3
            imageUrl="mulia-village.png"
            title="Mulia Village Juanda"
            projectUrl="https://mulia-village.vercel.app/"
          >
            Mulia Village Juanda Premium Residence Surabaya - Sidoarjo.
            Presenting a residence with an Islamic concept both in the
            environment and transactions. This website is made by team consist
            of 3 people. Made using NextJS, TypeScript, Tailwind.
          </Card3>
          <Card3
            imageUrl="expense-tracker.png"
            title="Money Tracker"
            projectUrl="https://vray92.github.io/money-tracker/money-tracker.mp4"
          >
            MoneyTrackr is a web application for tracking users income and
            expenses. The application allows users to record their financial
            transactions, organize by category, and view a list of transactions.
            Made by using React, NextJS, MySQL as database.
          </Card3>
          <Card3
            imageUrl="e-commerce.png"
            title="Shop Display"
            projectUrl="https://revou-trial-se.github.io/12-dec-assignment-VRay92/"
          >
            A simple website to showcase some E-Commerce Product. Made using
            HTML, CSS. This page was made as a part of learning programming
            language.
          </Card3>
          <Card3
            imageUrl="kalkulator-segitiga.png"
            title="Kalkulator Segitiga"
            projectUrl="https://revou-fundamental-course.github.io/25-dec-23-VRay92/"
          >
            Simple calculator to count the area and perimeter of a Triangle.
            Made using HTML, CSS , and Javascript
          </Card3>
          <Card3
            imageUrl="stok-data.png"
            title="Stock Data"
            projectUrl="https://vray92.github.io/Stok-Data/"
          >
            A simulation of database management using prompt and alert. Made
            using HTML and Javascript.
          </Card3>
        </div>
      </div>

      <div id="hr3" className="hr mx-4 md:mx-[8rem]"></div>

      {/* My Resume */}

      <div id="description3">
        <h4 className="text-[rgb(244,8,65)]">YEARS OF EXPERIENCE</h4>
        <p>
          <strong className="text-white text-5xl">My Resume</strong>
        </p>
      </div>
      <section
        id="my-resume"
        className="text-white mb-20 mt-20 flex md:flex-row flex-col relative"
      >
        <article id="job-experience" className="ml-0 md:ml-[8rem]">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-40 md:ml-56">
            <li className="mb-20 ms-8">
              <div className="absolute size-10 -left-[21px] top-0 text-[rgb(40,40,40)] bg-gray-200 rounded-full pl-1 pt-1 mt-2.5 text-[28px] border border-white dark:border-gray-900 dark:bg-gray-700">
                <BsBriefcaseFill />
              </div>
              <div className="text-white ml-4 pt-2 text-xl">
                <h2>Job Experience</h2>
                <h4 className="text-[rgb(244,8,65)]">2016-2024</h4>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute size-4 -left-2 bg-gray-200 rounded-full mt-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="absolute -left-36 mb-1 text-lg font-normal leading-none mt-2 text-white dark:text-gray-500">
                2020 - Present
              </time>
              <div className="text-white ml-4 md:block hidden">
                <Card2
                  title="Graphic Designer"
                  company="PT. Jawa Agrindo Internasional"
                  date="April 2020 - Present"
                  description="Design label, packaging, and other promotional media such as banner, brochure, calendar. Coordination with printing company from pre-design to post-production. Ensure the progress to meet desired timeline."
                />
              </div>
              <div className="text-white text-base ml-4 md:hidden block w-[200px]">
                <h1 className="font-bold">Graphic Designer</h1>
                <h1>PT. Jawa Agrindo Internasional</h1>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute size-4 -left-2 bg-gray-200 rounded-full mt-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="absolute -left-32 mb-1 text-lg font-normal leading-none mt-2 text-white dark:text-gray-500">
                2018 - 2020
              </time>
              <div className="text-white ml-4 md:block hidden">
                <Card2
                  title="Project Development"
                  date="January 2018 - April 2020"
                  company="PT. Jawa Agrindo Internasional"
                  description="Manage the operations of manufacturing project by developing plans and procedures, organize and oversee all aspects of the project around the factory by tracking expenses, and supervising all personnel."
                />
              </div>
              <div className="text-white text-base ml-4 md:hidden block w-[180px]">
                <h1 className="font-bold">Project Development</h1>
                <h1>PT. Jawa Agrindo Internasional</h1>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute size-4 -left-2 bg-gray-200 rounded-full mt-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="absolute -left-32 mb-1 text-lg font-normal leading-none mt-2 text-white dark:text-gray-500">
                2016 - 2017
              </time>
              <div className="text-white ml-4 md:block hidden">
                <Card2
                  title="Project Architect"
                  date="November 2016 - August 2017"
                  company="PT. Abdael Nusa"
                  description="Design residential, commercial building and create shop-drawing including architectural details, electrical and ME. Control check of the building progress. Make building check-list for contractor to ensure the specification required by the owner."
                />
              </div>
              <div className="text-white text-base ml-4 md:hidden block w-[180px]">
                <h1 className="font-bold">Project Architect</h1>
                <h1>PT. Abdael Nusa</h1>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute size-4 -left-2 bg-gray-200 rounded-full mt-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="absolute -left-32 mb-1 text-lg font-normal leading-none mt-2 text-white dark:text-gray-500">
                2014 - 2016
              </time>
              <div className="text-white ml-4 md:block hidden">
                <Card2
                  title="Project Architect"
                  date="November 2014 - November 2016"
                  company="CV. Bangun Sentosa Jaya"
                  description="Create concept, layout, and facade design. Create shop-drawing including architectural details, electrical and ME. Control check of the building progress. Discuss with the owner, client, and other stakeholders."
                />
              </div>
              <div className="text-white text-base ml-4 md:hidden block w-[180px]">
                <h1 className="font-bold">Project Architect</h1>
                <h1>CV. Bangun Sentosa Jaya</h1>
              </div>
            </li>
          </ol>
        </article>
        <article id="education" className="">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-40 md:ml-56 md:mt-0 mt-24">
            <li className="mb-20 ms-8">
              <div className="absolute size-10 -left-[21px] top-0 text-[rgb(40,40,40)] bg-gray-200 rounded-full pl-1 pt-1 mt-2.5 text-[28px] border border-white dark:border-gray-900 dark:bg-gray-700">
                <GiGraduateCap className="size-8" />
              </div>
              <div className="text-white ml-4 pt-2 text-xl">
                <h2>Education Quality</h2>
                <h4 className="text-[rgb(244,8,65)]">2010-2024</h4>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute size-4 -left-2 bg-gray-200 rounded-full mt-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="absolute -left-36 mb-1 text-lg font-normal leading-none mt-2 text-white dark:text-gray-500">
                2024 - Present
              </time>
              <div className="text-white ml-4 md:block hidden">
                <Card2
                  title="Purwadhika Job Connector"
                  company="Full-Stack Development"
                  date="2024"
                  description="Purwadhika Digital School's curriculum covers both front-end and back-end technologies, ensuring that students gain proficiency in every aspect of web development. This includes languages such as HTML, CSS, JavaScript, React, NextJS for front-end development, and languages like Node.js, Express, MySQL for back-end development."
                />
              </div>
              <div className="text-white text-base ml-4 md:hidden block w-[180px]">
                <h1 className="font-bold">Purwadhika Job Connector</h1>
                <h1>Full-Stack Development</h1>
              </div>
            </li>
            <li className="mb-10 ms-4">
              <div className="absolute size-4 -left-2 bg-gray-200 rounded-full mt-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="absolute -left-28 mb-1 text-lg font-normal leading-none mt-2 text-white dark:text-gray-500">
                2010 - 2014
              </time>
              <div className="text-white ml-4 md:block hidden">
                <Card2
                  title="Bachelor of Architecture"
                  date="2010 - 2014"
                  company="Petra Christian University"
                  description="The Architecture Program integrates architectural design, building technology, history, and theory of architecture, as well as urban and settlement environments."
                />
              </div>
              <div className="text-white text-base ml-4 md:hidden block w-[180px]">
                <h1 className="font-bold">Petra Christian University</h1>
                <h1>Bachelor of Architecture</h1>
              </div>
            </li>
          </ol>
        </article>
      </section>

      <div className="hr mx-4 md:mx-[8rem]"></div>

      {/* CONTACT ME DESKTOP VIEW */}

      <div id="description4" className="text-center hidden md:block">
        <h4 className="text-[rgb(244,8,65)]">CONTACT</h4>
        <p className="text-white">
          <strong className="text-white text-6xl">Contact Me</strong>
        </p>
      </div>
      <section
        id="contact-with-me"
        className="md:flex hidden mx-28 text-white mb-20 justify-center"
      >
        <article
          id="left-contact-with-me"
          className="w-1/5 h-full flex flex-col gap-14"
        >
          <div className="card3 h-[177px]">
            <span id="map" className="material-symbols-outlined">
              <IoMapOutline size={50}></IoMapOutline>
            </span>
            <br />
            <h4>Surabaya,Indonesia</h4>
          </div>
          <div className="card3 h-[177px]">
            <span id="phone" className="material-symbols-outlined text-white">
              <FaPhone size={50}></FaPhone>
            </span>
            <br />
            <h4>+62-821-4165-7805</h4>
          </div>
          <div className="card3">
            <span id="mail" className="material-symbols-outlined text-white">
              <MdMailOutline size={50}></MdMailOutline>
            </span>
            <br />
            <h4>adrian.irawan92@gmail.com</h4>
          </div>
          <div className="card3 h-[177px]">
            <span id="check" className="material-symbols-outlined text-white">
              <FiCheckCircle size={50}></FiCheckCircle>
            </span>
            <br />
            <h4>Freelance Available</h4>
          </div>
        </article>
        <article
          id="right-contact-with-me"
          className="w-3/5 mx-10 p-10 shadow-xl shadow-[#232323] space-y-4 h-[858px] bg-[#333333] rounded-lg"
        >
          <form id="form" action="/submit_form" method="post" className="">
            <div id="name-phone" className="flex mb-4">
              <input
                type="text"
                className="input-text mr-10 w-full h-[50px] bg-[#1B1B1B] placeholder-white rounded-md pl-5"
                placeholder="Enter Your Name"
                name="name"
                onChange={(e) => {
                  const newData = {
                    ...data,
                    name: e.target.value,
                  };
                  setData(newData);
                }}
                required
              />

              <input
                type="text"
                className="input-text w-full bg-[#1B1B1B] h-[50px] placeholder-white rounded-md pl-5"
                placeholder="Enter Your Email"
                name="email"
                onChange={(e) => {
                  const newData = {
                    ...data,
                    email: e.target.value,
                  };
                  setData(newData);
                }}
                required
              />
            </div>
            <div id="email-subject" className="flex ">
              <input
                type="text"
                className="input-text mr-10 w-full h-[50px] bg-[#1B1B1B] placeholder-white rounded-md pl-5"
                placeholder="Enter Your Phone"
                name="phone"
                onChange={(e) => {
                  const newData = {
                    ...data,
                    phone: e.target.value,
                  };
                  setData(newData);
                }}
                required
              />

              <input
                type="text"
                className="input-text w-full h-[50px] rounded-md bg-[#1B1B1B] placeholder-white pl-5"
                placeholder="Enter Your Subject"
                name="subject"
                onChange={(e) => {
                  const newData = {
                    ...data,
                    subject: e.target.value,
                  };
                  setData(newData);
                }}
                required
              />
            </div>
          </form>
          <div
            id="submit-form-container"
            className="flex flex-col items-center"
          >
            <textarea
              id="message-form"
              placeholder="Enter Your Message"
              className="bg-[#1B1B1B] placeholder-white rounded-md pl-5 pt-5 mb-5 h-[500px] w-full"
              name="message"
              rows={4}
              cols={50}
              onChange={(e) => {
                const newData = {
                  ...data,
                  message: e.target.value,
                };
                setData(newData);
              }}
              required
            ></textarea>
            <button
              className="rounded-lg cursor pointer text-center bg-[#f40841] w-full text-xl mt-3  h-[3.5rem]"
              onClick={() => {
                const query = `*Nama: ${data.name}*%0A*Email: ${data.email}*%0A*No.Telp: ${data.phone}*%0A*Subject: ${data.subject}*%0A%0A ${data.message}`;
                window.open(`https://wa.me/+6282141657805?text=${query}`);
              }}
            >
              Send Message
            </button>
          </div>
        </article>
      </section>

      {/* CONTACT ME MOBILE VIEW*/}

      <div id="description5" className="text-center mt-[8rem] block md:hidden">
        <h4 className="text-[rgb(244,8,65)]">CONTACT</h4>
        <p className="text-white">
          <strong className="text-white text-6xl">Contact Me</strong>
        </p>
      </div>
      <section
        id="contact-with-me"
        className="flex flex-col md:hidden mx-4 text-white mb-20 mt-20 justify-center"
      >
        <article
          id="left-contact-with-me"
          className="grid grid-cols-2 gap-4 w-full"
        >
          <div className="card3">
            <span id="map" className="material-symbols-outlined">
              <IoMapOutline size={50}></IoMapOutline>
            </span>
            <br />
            <h4>
              Surabaya,
              <br />
              Indonesia
            </h4>
          </div>
          <div className="card3">
            <span id="phone" className="material-symbols-outlined text-white">
              <FaPhone size={50}></FaPhone>
            </span>
            <br />
            <h4 className="text-sm">+62-821-4165-7805</h4>
          </div>
          <div className="card3">
            <span id="mail" className="material-symbols-outlined text-white">
              <MdMailOutline size={50}></MdMailOutline>
            </span>
            <br />
            <h4>
              adrian.irawan92
              <br />
              @gmail.com
            </h4>
          </div>
          <div className="card3">
            <span id="check" className="material-symbols-outlined text-white">
              <FiCheckCircle size={50}></FiCheckCircle>
            </span>
            <br />
            <h4>Freelance Available</h4>
          </div>
        </article>
        <article
          id="right-contact-with-me"
          className="w-full mt-10 p-4 shadow-xl shadow-[#232323] space-y-4 bg-[#333333] rounded-lg"
        >
          <form id="form" action="/submit_form" method="post" className="">
            <div id="name-phone" className="flex flex-col mb-4 space-y-4">
              <label htmlFor="name">Enter Your Name</label>
              <input
                type="text"
                className="input-text mr-10 w-full h-[50px] bg-[#1B1B1B] placeholder-white rounded-md pl-5"
                name="name"
                onChange={(e) => {
                  const newData = {
                    ...data2,
                    name: e.target.value,
                  };
                  setData2(newData);
                }}
                required
              />
              <label htmlFor="email">Enter Your Email</label>
              <input
                type="text"
                className="input-text w-full bg-[#1B1B1B] h-[50px] placeholder-white rounded-md pl-5"
                name="email"
                onChange={(e) => {
                  const newData = {
                    ...data2,
                    email: e.target.value,
                  };
                  setData2(newData);
                }}
                required
              />
              <label htmlFor="phone">Enter Your Phone</label>
              <input
                type="text"
                className="input-text mr-10 w-full h-[50px] bg-[#1B1B1B] placeholder-white rounded-md pl-5"
                name="phone"
                onChange={(e) => {
                  const newData = {
                    ...data2,
                    phone: e.target.value,
                  };
                  setData2(newData);
                }}
                required
              />
              <label htmlFor="phone">Enter Your Subject</label>
              <input
                type="text"
                className="input-text w-full h-[50px] rounded-md bg-[#1B1B1B] placeholder-white pl-5"
                name="subject"
                onChange={(e) => {
                  const newData = {
                    ...data2,
                    subject: e.target.value,
                  };
                  setData2(newData);
                }}
                required
              />
            </div>
          </form>
          <div id="submit-form-container" className="flex flex-col space-y-4">
            <h1>Enter Your Message</h1>
            <textarea
              id="message-form"
              className="bg-[#1B1B1B] placeholder-white rounded-md pl-5 pt-5 mb-5 h-[500px] w-full"
              name="message"
              rows={4}
              cols={50}
              onChange={(e) => {
                const newData = {
                  ...data2,
                  message: e.target.value,
                };
                setData2(newData);
              }}
              required
            ></textarea>
            <button
              className="rounded-lg cursor pointer text-center bg-[#f40841] w-full text-xl mt-3 pt-3 h-[3.5rem]"
              onClick={() => {
                const query = `*Nama: ${data2.name}*%0A*Email: ${data2.email}*%0A*No.Telp: ${data2.phone}*%0A*Subject: ${data2.subject}*%0A%0A ${data2.message}`;
                window.open(`https://wa.me/+6282141657805?text=${query}`);
              }}
            >
              Send Message
            </button>
          </div>
        </article>
      </section>

      {/* Footer */}
      <div id="hr2" className="hr mx-4 md:mx-[8rem]"></div>

      <footer>
        <img id="logo2" alt="logo" src="logo.png" className="w-[200px]" />
        <div
          id="social-media-icon"
          className="flex justify-center gap-3 md:justify-between md:w-[250px] "
        >
          <a
            className="size-[50px] active:translate-y-1"
            href="https://www.facebook.com/adrian.irawan.37/"
          >
            <img
              width={50}
              height={50}
              src="facebook.jpg"
              alt="facebook Icon"
            />
          </a>
          <a
            className="size-[50px] active:translate-y-1"
            href="https://www.linkedin.com/in/adrian-irawan92/"
          >
            <img
              width={50}
              height={50}
              src="linkedin.jpg"
              alt="linkedin Icon"
            />
          </a>
          <a
            className="size-[50px] active:translate-y-1"
            href="https://wa.me/+6282141657805"
          >
            <img
              width={50}
              height={50}
              src="whatsapp.jpg"
              alt="Whatsapp Icon"
            />
          </a>
          <a
            className="size-[50px] active:translate-y-1"
            href="https://github.com/VRay92?tab=repositories"
          >
            <img width={50} height={50} src="github.jpg" alt="github Icon" />
          </a>
        </div>
        <p className="text-white">Adrian Irawan @ 2024 All Rights Reserved.</p>
      </footer>
    </main>
  );
}
